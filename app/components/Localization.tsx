"use client";

import Image from "next/image";
import { translations } from "../lib/translations";
import type { Language } from "../lib/translations";

type LocalizationSectionProps = {
  language: Language;
};

const clientLogos = [
  { src: "/clients/apple.png", alt: "Apple" },
  { src: "/clients/meta.png", alt: "Meta" },
  { src: "/clients/google.png", alt: "Google" },
  { src: "/clients/lg.png", alt: "LG" },
  { src: "/clients/playstation.png", alt: "PlayStation" },
  { src: "/clients/temu.png", alt: "Temu" },
  { src: "/clients/toyota.png", alt: "Toyota" },
  { src: "/clients/ups.png", alt: "UPS" },
];

const loopedLogos = [...clientLogos, ...clientLogos];

export default function LocalizationSection({
  language,
}: LocalizationSectionProps) {
  const t = translations[language].localizationSection;

  return (
    <section id="localization" className="px-6 py-4 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* TOP LINE */}
        <div className="mx-auto mb-6 h-px max-w-6xl bg-slate-300/70 dark:bg-white/10" />

        {/* TITLE */}
        <div className="mb-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {t.title}
          </h2>
        </div>

        {/* CAROUSEL */}
        <div className="overflow-hidden py-2">
          <div className="flex w-max animate-marquee items-center">
            {loopedLogos.map((logo, index) => (
              <div key={index} className="mx-8 shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={110}
                  height={55}
                  className="object-contain opacity-90 transition duration-300 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

       
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}