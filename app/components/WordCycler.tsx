"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Language } from "../lib/translations";

type WordCyclerProps = {
  words: Record<Language, string>;
  finalLanguage: Language;
  introActive: boolean;
  durationMs?: number;
  startDelayMs?: number;
  className?: string;
};

const LANGS: Language[] = ["en", "bg", "de", "ja"];

export default function WordCycler({
  words,
  finalLanguage,
  introActive,
  durationMs = 1800,
  startDelayMs = 0,
  className = "",
}: WordCyclerProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(finalLanguage);

  const intervalRef = useRef<number | null>(null);
  const startTimeoutRef = useRef<number | null>(null);
  const stopTimeoutRef = useRef<number | null>(null);
  const hasMountedRef = useRef(false);
  const prevFinalLanguageRef = useRef<Language>(finalLanguage);

  const randomizedLanguages = useMemo(() => {
    const copy = [...LANGS];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }, []);

  const clearTimers = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (startTimeoutRef.current) {
      window.clearTimeout(startTimeoutRef.current);
      startTimeoutRef.current = null;
    }
    if (stopTimeoutRef.current) {
      window.clearTimeout(stopTimeoutRef.current);
      stopTimeoutRef.current = null;
    }
  };

  const runCycle = (delay: number) => {
    clearTimers();

    const initialLanguage =
      randomizedLanguages[Math.floor(Math.random() * randomizedLanguages.length)];
    setCurrentLanguage(initialLanguage);

    const tickSpeed = 70 + Math.floor(Math.random() * 110);

    startTimeoutRef.current = window.setTimeout(() => {
      intervalRef.current = window.setInterval(() => {
        const randomLanguage =
          randomizedLanguages[
            Math.floor(Math.random() * randomizedLanguages.length)
          ];
        setCurrentLanguage(randomLanguage);
      }, tickSpeed);
    }, delay);

    stopTimeoutRef.current = window.setTimeout(() => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setCurrentLanguage(finalLanguage);
    }, delay + durationMs);
  };

  useEffect(() => {
    hasMountedRef.current = true;
    return () => clearTimers();
  }, []);

  useEffect(() => {
    if (introActive) {
      runCycle(startDelayMs);
      prevFinalLanguageRef.current = finalLanguage;
      return;
    }

    const languageChanged = prevFinalLanguageRef.current !== finalLanguage;

    if (languageChanged && hasMountedRef.current) {
      runCycle(0);
    } else {
      clearTimers();
      setCurrentLanguage(finalLanguage);
    }

    prevFinalLanguageRef.current = finalLanguage;
  }, [introActive, finalLanguage, durationMs, startDelayMs, randomizedLanguages]);

  return <span className={className}>{words[currentLanguage]}</span>;
}