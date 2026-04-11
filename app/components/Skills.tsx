"use client";

import { useEffect, useRef, useState } from "react";
import type { Language } from "../lib/translations";
import { translations } from "../lib/translations";

type SkillsSectionProps = {
  language: Language;
};

type LanguageMeterProps = {
  percentage: number;
  label: string;
  level: string;
};

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(node);
      }
    }, options);

    observer.observe(node);

    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}

function LanguageMeter({ percentage, label, level }: LanguageMeterProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.35 });

  const radius = 38;
  const stroke = 7;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const progressOffset = circumference - (percentage / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative flex h-22 w-22 items-center justify-center sm:h-24 sm:w-24 md:h-26 md:w-26 lg:h-28 lg:w-28">
        <svg
          className="-rotate-90"
          width={radius * 2}
          height={radius * 2}
          viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        >
          <circle
            cx={radius}
            cy={radius}
            r={normalizedRadius}
            stroke="currentColor"
            strokeWidth={stroke}
            fill="transparent"
            className="text-slate-300/40 dark:text-slate-700/60"
          />
          <circle
            cx={radius}
            cy={radius}
            r={normalizedRadius}
            stroke="currentColor"
            strokeWidth={stroke}
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={isInView ? progressOffset : circumference}
            className="text-emerald-400 transition-[stroke-dashoffset] duration-1200 ease-out"
          />
        </svg>

        <div className="absolute text-center">
          <span className="text-base font-bold text-slate-800 dark:text-slate-100 sm:text-lg">
            {percentage}%
          </span>
        </div>
      </div>

      <div className="mt-2 text-center">
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 sm:text-base">
          {label}
        </p>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
          {level}
        </p>
      </div>
    </div>
  );
}

function ChipList({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-3.5 lg:justify-start">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-emerald-400/40 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur transition hover:-translate-y-0.5 hover:border-emerald-400/65 hover:bg-white dark:border-emerald-400/35 dark:bg-slate-900/55 dark:text-slate-100 dark:shadow-[0_8px_24px_rgba(15,23,42,0.18)] dark:hover:bg-slate-900/75"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function SkillsSection({ language }: SkillsSectionProps) {
  const t = translations[language];

  const itSkills = [
    "HTML / CSS / JavaScript",
    "TypeScript",
    "Git",
    "SQL",
    "Next.js",
    "Expo",
    "React / React Native",
    "Tailwind CSS",
    "Bootstrap",
    "Supabase",
    "Vercel",
    "GetStream",
  ];

  const catTools = [
    "Trados Studio",
    "MemoQ",
    "Phrase",
    "Smartling",
    "Smartcat",
    "Crowdin",
    "Lokalise",
    "GenTrans",
    "Across",
    "GlobalLink",
    "WordBee",
  ];

  const skills = t.skillsSection.skillItems;

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-8 lg:py-24"
    >
      <div
        className="pointer-events-none absolute left-[14%] top-[18%] h-40 w-40 rounded-full bg-emerald-300/10 blur-3xl dark:bg-emerald-300/10 md:h-48 md:w-48"
        style={{ animation: "floatOrb 10s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute right-[18%] bottom-[12%] h-52 w-52 rounded-full bg-cyan-300/10 blur-3xl dark:bg-cyan-300/10 md:h-60 md:w-60"
        style={{ animation: "floatOrb 12s ease-in-out infinite 1s" }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
            {t.skillsSection.title}
          </h2>
        </div>

        <div className="grid gap-10 md:gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-x-16 lg:gap-y-14">
          <div className="flex items-center justify-center lg:justify-end">
            <h3 className="text-center text-3xl font-light text-slate-500 dark:text-slate-400 lg:w-[220px] lg:text-right">
              {t.skillsSection.languages}
            </h3>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <LanguageMeter
              percentage={100}
              label={t.skillsSection.bulgarian}
              level={t.skillsSection.native}
            />
            <LanguageMeter
              percentage={90}
              label={t.skillsSection.english}
              level={t.skillsSection.professional}
            />
            <LanguageMeter
              percentage={30}
              label={t.skillsSection.german}
              level={t.skillsSection.basic}
            />
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <h3 className="text-center text-3xl font-light text-slate-500 dark:text-slate-400 lg:w-[220px] lg:text-right">
              {t.skillsSection.itSkills}
            </h3>
          </div>

          <div>
            <ChipList items={itSkills} />
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <h3 className="text-center text-3xl font-light text-slate-500 dark:text-slate-400 lg:w-[220px] lg:text-right">
              {t.skillsSection.catTools}
            </h3>
          </div>

          <div>
            <ChipList items={catTools} />
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <h3 className="text-center text-3xl font-light text-slate-500 dark:text-slate-400 lg:w-[220px] lg:text-right">
              {t.skillsSection.skills}
            </h3>
          </div>

          <div>
            <ChipList items={skills} />
          </div>
        </div>
      </div>
    </section>
  );
}