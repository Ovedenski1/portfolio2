"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ElementType } from "react";
import type { Language } from "../lib/translations";

type ScrambleTextProps<T extends ElementType = "p"> = {
  text: string;
  language?: Language;
  as?: T;
  className?: string;
  speed?: number;
  revealStep?: number;
  boxClassName?: string;
  contentClassName?: string;
};

const CHARSETS: Record<Language, string[]> = {
  en: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
  bg: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЮЯабвгдежзийклмнопрстуфхцчшщъьюя".split(""),
  de: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÄÖÜäöüß".split(""),
  ja: "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン一二三四五六七八九十".split(""),
};

const isLetterLike = (char: string) => /[\p{L}\p{N}]/u.test(char);

function randomFromArray(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function countRevealableChars(text: string) {
  let count = 0;

  for (const char of text) {
    if (isLetterLike(char)) count += 1;
  }

  return count;
}

function buildScrambledText(
  target: string,
  revealedCount: number,
  charset: string[]
) {
  let visibleLetters = 0;
  let result = "";

  for (let i = 0; i < target.length; i += 1) {
    const char = target[i];

    if (!isLetterLike(char)) {
      result += char;
      continue;
    }

    if (visibleLetters < revealedCount) {
      result += char;
    } else {
      result += randomFromArray(charset);
    }

    visibleLetters += 1;
  }

  return result;
}

export default function ScrambleText<T extends ElementType = "p">({
  text,
  language = "en",
  as,
  className = "",
  speed = 20,
  revealStep = 2,
  boxClassName = "",
  contentClassName = "",
}: ScrambleTextProps<T>) {
  const Component = (as || "p") as ElementType;

  const [displayText, setDisplayText] = useState(text);
  const frameRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const charset = useMemo(() => CHARSETS[language] ?? CHARSETS.en, [language]);
  const totalRevealable = useMemo(() => countRevealableChars(text), [text]);

  useEffect(() => {
    if (!text) {
      setDisplayText("");
      return;
    }

    let revealed = 0;
    setDisplayText(buildScrambledText(text, 0, charset));

    const tick = () => {
      revealed += revealStep;

      if (revealed >= totalRevealable) {
        setDisplayText(text);
        return;
      }

      setDisplayText(buildScrambledText(text, revealed, charset));

      timeoutRef.current = window.setTimeout(() => {
        frameRef.current = window.requestAnimationFrame(tick);
      }, speed);
    };

    timeoutRef.current = window.setTimeout(() => {
      frameRef.current = window.requestAnimationFrame(tick);
    }, speed);

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [text, charset, speed, revealStep, totalRevealable]);

  if (Component === "span") {
    return <span className={className}>{displayText}</span>;
  }

  return (
    <div className={`relative w-full overflow-hidden ${boxClassName}`}>
      <Component
        className={`invisible pointer-events-none select-none ${className} ${contentClassName}`}
        aria-hidden="true"
      >
        {text}
      </Component>

      <Component
        className={`absolute left-0 right-0 top-0 scramble-text ${className} ${contentClassName}`}
      >
        {displayText}
      </Component>
    </div>
  );
}