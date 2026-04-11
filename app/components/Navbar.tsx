"use client";

import { useEffect, useState } from "react";
import type { Language } from "../lib/translations";
import {
  languageButtonLabels,
  languageOrder,
  translations,
} from "../lib/translations";
import ScrambleText from "./ScrambleText";
import WordCycler from "./WordCycler";

type NavbarProps = {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  introActive: boolean;
};

export default function Navbar({
  language,
  setLanguage,
  introActive,
}: NavbarProps) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayDarkIcon, setDisplayDarkIcon] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const dark = savedTheme === "dark";

    setIsDark(dark);
    setDisplayDarkIcon(dark);

    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (isAnimating) return;

    const nextTheme = !isDark;
    setIsAnimating(true);

    window.setTimeout(() => {
      setDisplayDarkIcon(nextTheme);
      setIsDark(nextTheme);
      localStorage.setItem("theme", nextTheme ? "dark" : "light");

      if (nextTheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      setIsAnimating(false);
    }, 500);
  };

  const toggleLanguage = () => {
    const currentIndex = languageOrder.indexOf(language);
    const nextLanguage = languageOrder[(currentIndex + 1) % languageOrder.length];
    setLanguage(nextLanguage);
    localStorage.setItem("language", nextLanguage);
  };

  if (!mounted) return null;

  return (
    <div className="mb-8 flex justify-center lg:mb-12">
      <nav
        className={`flex w-full max-w-4xl items-center justify-between rounded-full border px-4 py-3 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur transition-colors duration-300 sm:px-6 ${
          isDark
            ? "border-slate-700 bg-slate-900/70"
            : "border-slate-300 bg-white/70"
        }`}
      >
        <div
          className={`flex items-center gap-2 text-[12px] font-semibold md:hidden ${
            isDark ? "text-slate-200" : "text-slate-800"
          }`}
        >
          <a href="#projects" className="transition hover:opacity-80">
            <WordCycler
              finalLanguage={language}
              introActive={introActive}
              durationMs={1500}
              startDelayMs={120}
              words={{
                en: translations.en.nav.projects,
                bg: translations.bg.nav.projects,
                de: translations.de.nav.projects,
                ja: translations.ja.nav.projects,
              }}
            />
          </a>

          <span className="opacity-40">•</span>

          <a href="#skills" className="transition hover:opacity-80">
            <WordCycler
              finalLanguage={language}
              introActive={introActive}
              durationMs={1700}
              startDelayMs={260}
              words={{
                en: translations.en.nav.skills,
                bg: translations.bg.nav.skills,
                de: translations.de.nav.skills,
                ja: translations.ja.nav.skills,
              }}
            />
          </a>

          <span className="opacity-40">•</span>

          <a href="#experience" className="transition hover:opacity-80">
            <WordCycler
              finalLanguage={language}
              introActive={introActive}
              durationMs={1900}
              startDelayMs={420}
              words={{
                en: translations.en.nav.experience,
                bg: translations.bg.nav.experience,
                de: translations.de.nav.experience,
                ja: translations.ja.nav.experience,
              }}
            />
          </a>
        </div>

        <div
          className={`hidden text-lg font-semibold tracking-tight md:block ${
            isDark ? "text-white" : "text-slate-800"
          }`}
        >
          ovedenski.com
        </div>

        <div
          className={`hidden items-center gap-8 text-sm font-medium md:flex ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          <a
            href="#projects"
            className={`w-[100px] text-center transition ${
              isDark ? "hover:text-white" : "hover:text-slate-900"
            }`}
          >
            <WordCycler
              finalLanguage={language}
              introActive={introActive}
              durationMs={1500}
              startDelayMs={120}
              words={{
                en: translations.en.nav.projects,
                bg: translations.bg.nav.projects,
                de: translations.de.nav.projects,
                ja: translations.ja.nav.projects,
              }}
            />
          </a>

          <a
            href="#skills"
            className={`w-[90px] text-center transition ${
              isDark ? "hover:text-white" : "hover:text-slate-900"
            }`}
          >
            <WordCycler
              finalLanguage={language}
              introActive={introActive}
              durationMs={1700}
              startDelayMs={260}
              words={{
                en: translations.en.nav.skills,
                bg: translations.bg.nav.skills,
                de: translations.de.nav.skills,
                ja: translations.ja.nav.skills,
              }}
            />
          </a>

          <a
            href="#experience"
            className={`w-[110px] text-center transition ${
              isDark ? "hover:text-white" : "hover:text-slate-900"
            }`}
          >
            <WordCycler
              finalLanguage={language}
              introActive={introActive}
              durationMs={1900}
              startDelayMs={420}
              words={{
                en: translations.en.nav.experience,
                bg: translations.bg.nav.experience,
                de: translations.de.nav.experience,
                ja: translations.ja.nav.experience,
              }}
            />
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            className={`min-w-[84px] rounded-full border px-3 py-2 text-center text-xs font-medium transition sm:px-4 sm:text-sm ${
              isDark
                ? "border-slate-700 text-slate-200 hover:bg-slate-800"
                : "border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
            aria-label="Change language"
            title="Change language"
          >
            <ScrambleText
              text={languageButtonLabels[language]}
              language={language}
              as="span"
              className="inline-block"
              speed={20}
              revealStep={1}
            />
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
              isDark
                ? "text-slate-200 hover:bg-slate-800"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <span
              className={`theme-icon-wrap ${
                isAnimating ? "theme-icon-spin" : ""
              }`}
            >
              {displayDarkIcon ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"
                  />
                </svg>
              )}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}