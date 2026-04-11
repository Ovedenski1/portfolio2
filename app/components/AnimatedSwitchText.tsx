"use client";

import { useMemo } from "react";

type AnimatedSwitchTextProps = {
  text: string;
  as?: "span" | "p" | "div" | "h1" | "h2" | "h3";
  className?: string;
  staggerThreshold?: number;
};

export default function AnimatedSwitchText({
  text,
  as = "span",
  className = "",
  staggerThreshold = 42,
}: AnimatedSwitchTextProps) {
  const Tag = as;

  const chars = useMemo(() => Array.from(text), [text]);
  const useCharAnimation = chars.length <= staggerThreshold;

  if (!useCharAnimation) {
    return (
      <Tag key={text} className={`${className} translate-block-reveal`}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag key={text} className={className}>
      {chars.map((char, index) => (
        <span
          key={`${text}-${index}`}
          className="translate-char"
          style={{ animationDelay: `${index * 18}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Tag>
  );
}