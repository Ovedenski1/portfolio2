"use client";

import Image from "next/image";
import type { Language } from "../lib/translations";
import { translations } from "../lib/translations";

type EducationSectionProps = {
  language: Language;
};

type EducationItem = {
  title: string;
  institution: string;
  period: string;
  image: string;
};

function EducationCard({ item }: { item: EducationItem }) {
  return (
    <article className="rounded-[28px] border border-slate-300/70 bg-white/70 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.10)] backdrop-blur dark:border-white/10 dark:bg-slate-950/45 dark:shadow-[0_18px_45px_rgba(2,8,23,0.25)] sm:p-6 md:p-7">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6 md:gap-8">
        <div className="flex shrink-0 items-center justify-center sm:w-[180px] md:w-[200px]">
          <div className="relative h-[72px] w-[160px] sm:h-[82px] sm:w-[180px] md:h-[92px] md:w-[200px]">
            <Image
              src={item.image}
              alt={item.institution}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 160px, (max-width: 1024px) 200px, 180px"
            />
          </div>
        </div>

        <div className="min-w-0 flex-1 text-center sm:text-left">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-[1.75rem]">
            {item.title}
          </h3>

          <p className="mt-2 text-lg font-semibold text-slate-700 dark:text-slate-300 md:text-xl">
            {item.institution}
          </p>

          <p className="mt-3 text-base font-medium text-emerald-500 dark:text-emerald-300 md:text-lg">
            {item.period}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function EducationSection({
  language,
}: EducationSectionProps) {
  const t = translations[language];
  const items = t.educationSection.items;

  return (
    <section
      id="education"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-22 lg:px-8 lg:py-24"
    >
      <div
        className="pointer-events-none absolute left-[10%] top-[18%] h-44 w-44 rounded-full bg-emerald-300/10 blur-3xl md:h-52 md:w-52"
        style={{ animation: "floatOrb 10s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute bottom-[12%] right-[12%] h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl md:h-64 md:w-64"
        style={{ animation: "floatOrb 12s ease-in-out infinite 1s" }}
      />

      <div className="mx-auto max-w-5xl md:max-w-6xl">
        <div className="mb-12 text-center lg:mb-16">
          <div className="mx-auto mb-8 h-px max-w-6xl bg-slate-300/70 dark:bg-white/10" />
          <h2 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
            {t.educationSection.title}
          </h2>
        </div>

        <div className="space-y-6 md:space-y-8">
          {items.map((item) => (
            <EducationCard
              key={`${item.title}-${item.institution}-${item.period}`}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}