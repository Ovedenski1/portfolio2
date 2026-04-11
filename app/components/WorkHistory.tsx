"use client";

import { useEffect, useRef, useState } from "react";
import type { Language } from "../lib/translations";
import { translations } from "../lib/translations";

type WorkHistorySectionProps = {
  language: Language;
};

function useInViewOnce<T extends HTMLElement>(options?: IntersectionObserverInit) {
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

type JobItem = {
  title: string;
  company: string;
  period: string;
  location?: string;
  bullets?: readonly string[];
};

function JobCard({
  job,
  side,
  isVisible,
  delayMs,
}: {
  job: JobItem;
  side: "left" | "right";
  isVisible: boolean;
  delayMs: number;
}) {
  return (
    <div
      className={`w-full lg:w-[calc(50%-28px)] ${
        side === "left" ? "lg:pr-10" : "lg:ml-auto lg:pl-10"
      }`}
      style={{
        transitionDelay: `${delayMs}ms`,
      }}
    >
      <article
        className={`rounded-[28px] border border-slate-300/70 bg-white/70 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.10)] backdrop-blur transition-all duration-700 dark:border-white/10 dark:bg-slate-950/45 dark:shadow-[0_18px_45px_rgba(2,8,23,0.25)] md:p-7 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : side === "left"
              ? "-translate-x-10 translate-y-6 opacity-0"
              : "translate-x-10 translate-y-6 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 border-b border-slate-200/80 pb-4 dark:border-white/10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 md:text-2xl">
              {job.title}
            </h3>
            <span className="shrink-0 whitespace-nowrap text-sm font-semibold text-emerald-500 dark:text-emerald-300 md:text-base">
              {job.period}
            </span>
          </div>

          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <p className="text-base font-semibold text-slate-700 dark:text-slate-300 md:text-lg">
              {job.company}
            </p>
            {job.location ? (
              <p className="text-sm text-slate-500 dark:text-slate-400 md:text-base">
                {job.location}
              </p>
            ) : null}
          </div>
        </div>

        {job.bullets && job.bullets.length > 0 ? (
          <ul className="mt-5 space-y-3 text-base leading-7 text-slate-700 dark:text-slate-300 md:text-[1.02rem] md:leading-8">
            {job.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </article>
    </div>
  );
}

export default function WorkHistorySection({
  language,
}: WorkHistorySectionProps) {
  const t = translations[language];
  const jobs = t.experienceSection.jobs;
  const { ref, isInView } = useInViewOnce<HTMLElement>({ threshold: 0.18 });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-22 lg:px-8 lg:py-24"
    >
      <div
        className="pointer-events-none absolute left-[8%] top-[14%] h-44 w-44 rounded-full bg-emerald-300/10 blur-3xl md:h-52 md:w-52"
        style={{ animation: "floatOrb 10s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute right-[10%] bottom-[8%] h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl md:h-64 md:w-64"
        style={{ animation: "floatOrb 12s ease-in-out infinite 1s" }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
            {t.experienceSection.title}
          </h2>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden -translate-x-1/2 lg:block">
            <div className="relative h-full w-[4px] rounded-full bg-slate-300/70 dark:bg-slate-700/40">
              <div
                className={`absolute left-0 top-0 w-full rounded-full bg-emerald-400 transition-all duration-[1600ms] ease-out ${
                  isInView ? "h-full" : "h-0"
                }`}
              />
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-4 top-0 md:left-5 lg:hidden">
            <div className="relative h-full w-[4px] rounded-full bg-slate-300/70 dark:bg-slate-700/40">
              <div
                className={`absolute left-0 top-0 w-full rounded-full bg-emerald-400 transition-all duration-[1600ms] ease-out ${
                  isInView ? "h-full" : "h-0"
                }`}
              />
            </div>
          </div>

          <div className="space-y-10 md:space-y-12 lg:space-y-14">
            {jobs.map((job, index) => {
              const side = index % 2 === 0 ? "left" : "right";

              return (
                <div
                  key={`${job.company}-${job.title}-${job.period}`}
                  className="relative flex items-start pl-12 md:pl-16 lg:block lg:pl-0"
                >
                  <div className="absolute left-4 top-8 -translate-x-1/2 md:left-5 lg:hidden">
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full border-2 border-slate-400 bg-white shadow-[0_0_0_6px_rgba(148,163,184,0.22)] transition-all duration-500 dark:border-slate-200 dark:bg-slate-900 dark:shadow-[0_0_0_6px_rgba(15,23,42,0.35)] ${
                        isInView ? "scale-100 opacity-100" : "scale-0 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 180}ms` }}
                    >
                      <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-10 hidden -translate-x-1/2 lg:block">
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-slate-400 bg-white shadow-[0_0_0_7px_rgba(148,163,184,0.22)] transition-all duration-500 dark:border-slate-200 dark:bg-slate-900 dark:shadow-[0_0_0_7px_rgba(15,23,42,0.35)] ${
                        isInView ? "scale-100 opacity-100" : "scale-0 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 180}ms` }}
                    >
                      <div className="h-3 w-3 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  <JobCard
                    job={job}
                    side={side}
                    isVisible={isInView}
                    delayMs={index * 220}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}