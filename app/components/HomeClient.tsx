"use client";

import { useEffect, useState } from "react";
import HeroSection from "../components/Hero";
import SkillsSection from "../components/Skills";
import WorkHistorySection from "../components/WorkHistory";
import EducationSection from "../components/Education";
import ProjectsSection from "../components/Projects";
import LocalizationSection from "../components/Localization";
import ContactSection from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import type { Language } from "../lib/translations";

export default function HomeClient() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;

    if (
      savedLanguage === "en" ||
      savedLanguage === "bg" ||
      savedLanguage === "de" ||
      savedLanguage === "ja"
    ) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <main>
      <HeroSection language={language} setLanguage={setLanguage} />
      <SkillsSection language={language} />
      <WorkHistorySection language={language} />
      <EducationSection language={language} />
      <ProjectsSection language={language} />
      <LocalizationSection language={language} />
      <ContactSection language={language} />
      <Footer />
      <BackToTop />
    </main>
  );
}