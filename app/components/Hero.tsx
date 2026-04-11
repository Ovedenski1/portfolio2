"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ScrambleText from "./ScrambleText";
import WordCycler from "./WordCycler";
import type { Language } from "../lib/translations";
import { translations } from "../lib/translations";

type HeroSectionProps = {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
};

export default function HeroSection({
  language,
  setLanguage,
}: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);
  const [introActive, setIntroActive] = useState(false);

  useEffect(() => {
    setIntroActive(true);

    const timeout = window.setTimeout(() => {
      setIntroActive(false);
    }, 4200);

    setMounted(true);

    return () => window.clearTimeout(timeout);
  }, []);

  if (!mounted) return null;

  const t = translations[language];

  return (
    <section className="relative overflow-hidden bg-[var(--background)] px-4 py-5 text-[var(--foreground)] transition-colors duration-300 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-8 lg:py-16">
      <div
        className="pointer-events-none absolute left-[8%] top-[38%] h-40 w-40 rounded-full bg-emerald-300/25 blur-3xl dark:bg-emerald-300/15 md:h-48 md:w-48"
        style={{ animation: "floatOrb 9s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute right-[12%] top-[22%] h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-300/15 md:h-60 md:w-60"
        style={{ animation: "floatOrb 11s ease-in-out infinite 1.5s" }}
      />
      <div
        className="pointer-events-none absolute bottom-[10%] left-[45%] h-44 w-44 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-300/15 md:h-52 md:w-52"
        style={{ animation: "floatOrb 10s ease-in-out infinite 0.8s" }}
      />

      <div className="mx-auto max-w-7xl">
        <Navbar
          language={language}
          setLanguage={setLanguage}
          introActive={introActive}
        />

        <div className="flex flex-col gap-4 md:gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
          <div className="order-1 flex w-full shrink-0 justify-center lg:order-2 lg:w-[430px] lg:justify-end">
            <div className="relative profile-wrapper h-64 w-64 sm:h-72 sm:w-72 md:h-[340px] md:w-[340px] lg:h-[430px] lg:w-[430px]">
              <div className="absolute inset-0 rounded-full bg-emerald-200/30 blur-3xl dark:bg-cyan-400/20" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-8 border-white shadow-2xl shadow-slate-300 dark:border-slate-200/80 dark:shadow-cyan-500/10">
                <img
                  src="/profile.png"
                  alt="Profile portrait"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="order-2 mx-auto w-full max-w-[620px] shrink-0 text-center sm:-mt-2 md:max-w-[760px] md:text-center lg:order-1 lg:mx-0 lg:mt-0 lg:max-w-[620px] lg:text-left">
            <div className="mx-auto flex h-[140px] w-full max-w-[620px] flex-col items-center justify-center md:h-[220px] md:max-w-[760px] md:justify-center lg:mx-0 lg:h-[240px] lg:max-w-[620px] lg:items-start">
              <h1 className="w-full text-center text-4xl font-extrabold uppercase tracking-tight text-slate-800 dark:text-white sm:text-5xl md:text-6xl lg:text-left lg:text-6xl xl:text-7xl">
                <span className="block text-emerald-400">
                  <span className="inline-block -translate-x-2 text-center sm:-translate-x-3 md:-translate-x-5 lg:-translate-x-8 lg:text-left xl:-translate-x-12">
                    <WordCycler
                      finalLanguage={language}
                      introActive={introActive}
                      durationMs={1800}
                      startDelayMs={0}
                      words={{
                        en: translations.en.hero.firstName,
                        bg: translations.bg.hero.firstName,
                        de: translations.de.hero.firstName,
                        ja: translations.ja.hero.firstName,
                      }}
                    />
                  </span>
                </span>

                <span className="block">
                  <span className="inline-block translate-x-2 text-center sm:translate-x-3 md:translate-x-5 lg:translate-x-8 lg:text-left xl:translate-x-12">
                    <WordCycler
                      finalLanguage={language}
                      introActive={introActive}
                      durationMs={2400}
                      startDelayMs={180}
                      words={{
                        en: translations.en.hero.lastName,
                        bg: translations.bg.hero.lastName,
                        de: translations.de.hero.lastName,
                        ja: translations.ja.hero.lastName,
                      }}
                    />
                  </span>
                </span>
              </h1>

              <div className="mt-2 flex min-h-[44px] w-full items-center justify-center text-lg font-medium text-slate-500 dark:text-slate-400 sm:text-2xl md:min-h-[64px] md:text-2xl lg:justify-start">
                <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 whitespace-normal md:max-w-[640px] lg:justify-start lg:whitespace-nowrap">
                  <span className="inline-block text-center lg:text-left">
                    <WordCycler
                      finalLanguage={language}
                      introActive={introActive}
                      durationMs={1500}
                      startDelayMs={260}
                      words={{
                        en: translations.en.hero.roleLeft,
                        bg: translations.bg.hero.roleLeft,
                        de: translations.de.hero.roleLeft,
                        ja: translations.ja.hero.roleLeft,
                      }}
                    />
                  </span>

                  <span className="inline-block text-center">
                    <WordCycler
                      finalLanguage={language}
                      introActive={introActive}
                      durationMs={1200}
                      startDelayMs={420}
                      words={{
                        en: translations.en.hero.roleJoiner,
                        bg: translations.bg.hero.roleJoiner,
                        de: translations.de.hero.roleJoiner,
                        ja: translations.ja.hero.roleJoiner,
                      }}
                    />
                  </span>

                  <span className="inline-block text-center lg:text-left">
                    <WordCycler
                      finalLanguage={language}
                      introActive={introActive}
                      durationMs={2200}
                      startDelayMs={140}
                      words={{
                        en: translations.en.hero.roleRight,
                        bg: translations.bg.hero.roleRight,
                        de: translations.de.hero.roleRight,
                        ja: translations.ja.hero.roleRight,
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-1 w-full max-w-[360px] sm:max-w-[440px] md:max-w-[680px] lg:mx-0 lg:max-w-[620px]">
              <ScrambleText
                key={`${language}-${t.hero.description}`}
                text={t.hero.description}
                language={language}
                as="p"
                className="scramble-safe-text text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg md:text-lg md:leading-8"
                boxClassName="h-[190px] md:h-[170px] lg:h-[210px]"
                contentClassName="pb-8"
                speed={18}
                revealStep={2}
              />
            </div>

            <div className="mt-5 flex h-auto flex-col items-center justify-center gap-3 sm:mt-3 sm:h-auto sm:flex-row sm:flex-wrap sm:justify-center md:mt-4 md:gap-4 lg:justify-start">
              <a
                href="#contact"
                className="inline-flex h-[52px] w-[220px] items-center justify-center overflow-hidden rounded-full bg-slate-800 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-700 dark:bg-slate-800 dark:shadow-slate-950 dark:hover:bg-slate-700 md:w-[230px]"
              >
                <span className="inline-flex w-full items-center justify-center text-center">
                  <WordCycler
                    finalLanguage={language}
                    introActive={introActive}
                    durationMs={2100}
                    startDelayMs={220}
                    words={{
                      en: translations.en.hero.sayHello,
                      bg: translations.bg.hero.sayHello,
                      de: translations.de.hero.sayHello,
                      ja: translations.ja.hero.sayHello,
                    }}
                  />
                </span>
              </a>

              <a
                href="/cv.pdf"
                download="Lyuboslav_Ovedenski_CV.pdf"
                className="inline-flex h-[52px] w-[280px] items-center justify-center overflow-hidden rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-900 md:w-[300px]"
              >
                <span className="inline-flex w-full items-center justify-center text-center">
                  <ScrambleText
                    key={`${language}-${t.hero.downloadCv}`}
                    text={t.hero.downloadCv}
                    language={language}
                    as="span"
                    className="inline-block"
                    speed={20}
                    revealStep={1}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}