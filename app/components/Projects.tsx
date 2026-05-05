"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { Language } from "../lib/translations";
import { translations } from "../lib/translations";

type ProjectsSectionProps = {
  language: Language;
};

type ProjectActionType =
  | "visit"
  | "download"
  | "downloadApk"
  | "github"
  | "private"
  | "inProgress";

type ProjectItem = {
  slug: string;
  name: string;
  description: string;
  technologies: readonly string[];
  actionType: ProjectActionType;
  actionHref?: string;
  images: number;
  coverImage?: number;
};

type ModalState = {
  projectIndex: number;
  imageIndex: number;
} | null;

function ProjectButton({
  type,
  href,
  labels,
}: {
  type: ProjectActionType;
  href?: string;
  labels: {
    visit: string;
    download: string;
    downloadApk: string;
    github: string;
    private: string;
    inProgress: string;
  };
}) {
  const baseClass =
    "inline-flex h-11 min-w-[140px] items-center justify-center rounded-full px-5 text-sm font-semibold transition";

  if (type === "private" || type === "inProgress") {
    return (
      <span
        className={`${baseClass} cursor-not-allowed border border-slate-300/80 bg-slate-200/70 text-slate-500 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-400`}
      >
        {type === "inProgress" ? labels.inProgress : labels.private}
      </span>
    );
  }

  const label =
    type === "visit"
      ? labels.visit
      : type === "download"
        ? labels.download
        : type === "downloadApk"
          ? labels.downloadApk
          : labels.github;

  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noreferrer"
      className={`${baseClass} border border-emerald-400/45 bg-white/80 text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 hover:border-emerald-400/70 hover:bg-white dark:bg-slate-900/70 dark:text-slate-100 dark:shadow-[0_8px_24px_rgba(15,23,42,0.18)] dark:hover:bg-slate-900`}
    >
      {label}
    </a>
  );
}

function ImageModal({
  projects,
  modal,
  setModal,
}: {
  projects: ProjectItem[];
  modal: ModalState;
  setModal: React.Dispatch<React.SetStateAction<ModalState>>;
}) {
  useEffect(() => {
    if (!modal) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModal(null);
        return;
      }

      if (event.key === "ArrowRight") {
        setModal((prev) => {
          if (!prev) return prev;

          const currentProject = projects[prev.projectIndex];
          const hasNextImage = prev.imageIndex + 1 < currentProject.images;

          if (!hasNextImage) return prev;

          return {
            ...prev,
            imageIndex: prev.imageIndex + 1,
          };
        });
      }

      if (event.key === "ArrowLeft") {
        setModal((prev) => {
          if (!prev || prev.imageIndex === 0) return prev;

          return {
            ...prev,
            imageIndex: prev.imageIndex - 1,
          };
        });
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [modal, projects, setModal]);

  if (!modal) return null;

  const project = projects[modal.projectIndex];
  const imageSrc = `/projects/${project.slug}/${modal.imageIndex + 1}.png`;

  const hasPreviousImage = modal.imageIndex > 0;
  const hasNextImage = modal.imageIndex + 1 < project.images;

  const goPreviousImage = () => {
    if (!hasPreviousImage) return;

    setModal((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        imageIndex: prev.imageIndex - 1,
      };
    });
  };

  const goNextImage = () => {
    if (!hasNextImage) return;

    setModal((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        imageIndex: prev.imageIndex + 1,
      };
    });
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 px-4 py-6 backdrop-blur-sm"
      onClick={() => setModal(null)}
    >
      <div
        className="relative w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setModal(null)}
          className="absolute right-2 top-2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg font-bold text-slate-800 shadow-md transition hover:bg-white dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
        >
          ×
        </button>

        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 shadow-[0_18px_45px_rgba(15,23,42,0.25)] backdrop-blur">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-slate-900/80">
            <Image
              src={imageSrc}
              alt={`${project.name} screenshot ${modal.imageIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 900px"
            />

            <button
              type="button"
              onClick={goPreviousImage}
              disabled={!hasPreviousImage}
              className={`absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border text-xl font-bold shadow-md transition ${
                hasPreviousImage
                  ? "border-white/20 bg-white/85 text-slate-800 hover:bg-white dark:bg-slate-800/90 dark:text-slate-100 dark:hover:bg-slate-700"
                  : "cursor-not-allowed border-slate-300/30 bg-slate-300/40 text-slate-500 opacity-40 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-500"
              }`}
              aria-label="Previous image"
            >
              ←
            </button>

            <button
              type="button"
              onClick={goNextImage}
              disabled={!hasNextImage}
              className={`absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border text-xl font-bold shadow-md transition ${
                hasNextImage
                  ? "border-white/20 bg-white/85 text-slate-800 hover:bg-white dark:bg-slate-800/90 dark:text-slate-100 dark:hover:bg-slate-700"
                  : "cursor-not-allowed border-slate-300/30 bg-slate-300/40 text-slate-500 opacity-40 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-500"
              }`}
              aria-label="Next image"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection({ language }: ProjectsSectionProps) {
  const t = translations[language];

  const projects = useMemo<ProjectItem[]>(
    () => [
      {
        slug: "saigo-shopping-list",
        name: "Saigo Shopping List",
        description: t.projectsSection.items.saigoShoppingList,
        technologies: ["Expo", "React Native", "OpenStreetMap"],
        actionType: "downloadApk",
        actionHref:
          "https://drive.google.com/file/d/172SiLT_ZU1T1hrS_TQu8rOmOXt_c55Hf/view?usp=sharing",
        images: 8,
      },
      {
        slug: "tms",
        name: "TMS",
        description: t.projectsSection.items.tms,
        technologies: ["Next.js", "Supabase", "Tailwind CSS"],
        actionType: "private",
        images: 7,
        coverImage: 2,
      },
      {
        slug: "dumichka",
        name: "Dumichki",
        description: t.projectsSection.items.dumichka,
        technologies: ["Next.js", "Supabase"],
        actionType: "visit",
        actionHref: "https://duma-psi.vercel.app/",
        images: 2,
      },
      {
        slug: "rithy",
        name: "Rithy",
        description: t.projectsSection.items.rithy,
        technologies: ["Expo", "Android Studio"],
        actionType: "downloadApk",
        actionHref:
          "https://drive.google.com/file/d/19ZzDwq_8sxpxezDSIWjmm4TXy7sMSQU0/view",
        images: 4,
      },
      {
        slug: "desis-kitchen",
        name: "Desi's Kitchen",
        description: t.projectsSection.items.desisKitchen,
        technologies: ["React Native", "Tailwind CSS", "Next.js"],
        actionType: "visit",
        actionHref: "https://cookpad-desi.vercel.app/",
        images: 3,
      },
      {
        slug: "sheep-game",
        name: "Sheep Game",
        description: t.projectsSection.items.sheepGame,
        technologies: ["C#", "Unity"],
        actionType: "download",
        actionHref: "https://poko97.itch.io/sheep-frenzy",
        images: 1,
      },
      {
        slug: "dice-game",
        name: "Dice Game (Demo)",
        description: t.projectsSection.items.diceGame,
        technologies: ["Next.js", "Vercel", "Supabase"],
        actionType: "visit",
        actionHref: "https://tavern-dice.vercel.app/",
        images: 3,
      },
      {
        slug: "pokemon-game",
        name: "Pokemon Game",
        description: t.projectsSection.items.pokemonGame,
        technologies: ["RPG Maker XP", "Ruby"],
        actionType: "private",
        images: 1,
      },
      {
        slug: "profilms",
        name: "ProFilms",
        description: t.projectsSection.items.profilms,
        technologies: ["Tailwind CSS", "Next.js"],
        actionType: "visit",
        actionHref: "https://exitfilm-clone.vercel.app/",
        images: 1,
      },
      {
        slug: "po-generator",
        name: "PO Generator",
        description: t.projectsSection.items.poGenerator,
        technologies: ["HTML", "CSS", "JavaScript"],
        actionType: "github",
        actionHref:
          "https://github.com/Ovedenski1/purchase-order-pdf-generator-v2",
        images: 1,
      },
      {
        slug: "kizuna",
        name: "Kizuna",
        description: t.projectsSection.items.kizuna,
        technologies: ["Next.js", "Supabase", "Tailwind CSS"],
        actionType: "visit",
        actionHref: "https://nihongo-site-2qay.vercel.app/",
        images: 3,
      },
      {
        slug: "pokko",
        name: "Pokko",
        description: t.projectsSection.items.pokko,
        technologies: [
          "Vercel",
          "Next.js",
          "Supabase",
          "Stream",
          "Tailwind CSS",
        ],
        actionType: "visit",
        actionHref: "https://game-swap-6wgn.vercel.app/",
        images: 3,
      },
      {
        slug: "pug-express-website",
        name: "Pug Express Website",
        description: t.projectsSection.items.pugExpressWebsite,
        technologies: ["Next.js"],
        actionType: "inProgress",
        images: 1,
      },
    ],
    [t.projectsSection.items]
  );

  const [modal, setModal] = useState<ModalState>(null);

  return (
    <>
      <section
        id="projects"
        className="relative overflow-hidden px-4 py-1 sm:px-6 sm:py-1 md:px-8 md:py-1 lg:px-8 lg:py-1"
      >
        <div
          className="pointer-events-none absolute left-[8%] top-[16%] h-44 w-44 rounded-full bg-emerald-300/10 blur-3xl md:h-52 md:w-52"
          style={{ animation: "floatOrb 10s ease-in-out infinite" }}
        />
        <div
          className="pointer-events-none absolute bottom-[10%] right-[12%] h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl md:h-64 md:w-64"
          style={{ animation: "floatOrb 12s ease-in-out infinite 1s" }}
        />

        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center lg:mb-16">
            <div className="mx-auto mb-8 h-px max-w-6xl bg-slate-300/70 dark:bg-white/10" />
            <h2 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
              {t.projectsSection.title}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-7 xl:grid-cols-3">
            {projects.map((project, projectIndex) => (
              <article
                key={project.name}
                className="flex h-full min-h-[540px] flex-col overflow-hidden rounded-[28px] border border-slate-300/70 bg-white/70 shadow-[0_18px_45px_rgba(15,23,42,0.10)] backdrop-blur dark:border-white/10 dark:bg-slate-950/45 dark:shadow-[0_18px_45px_rgba(2,8,23,0.25)] md:min-h-[580px]"
              >
                <button
                  type="button"
                  onClick={() => setModal({ projectIndex, imageIndex: 0 })}
                  className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-200 text-left dark:bg-slate-900"
                >
                  <Image
                    src={`/projects/${project.slug}/${project.coverImage ?? 1}.png`}
                    alt={project.name}
                    fill
                    className="object-cover transition duration-300 hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </button>

                <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-emerald-400/40 bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-[0_8px_20px_rgba(15,23,42,0.06)] backdrop-blur dark:bg-slate-900/70 dark:text-slate-100 dark:shadow-[0_8px_20px_rgba(15,23,42,0.18)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl font-bold leading-tight text-slate-800 dark:text-slate-100 md:text-[2rem]">
                    {project.name}
                  </h3>

                  <p
                    className={`mt-4 flex-1 text-slate-600 dark:text-slate-300 ${
                      project.description.length > 95
                        ? "text-base leading-7"
                        : "text-lg leading-8"
                    } md:text-[1.02rem]`}
                  >
                    {project.description}
                  </p>

                  <div className="mt-6">
                    <ProjectButton
                      type={project.actionType}
                      href={project.actionHref}
                      labels={{
                        visit: t.projectsSection.visit,
                        download: t.projectsSection.download,
                        downloadApk: t.projectsSection.downloadApk,
                        github: t.projectsSection.github,
                        private: t.projectsSection.private,
                        inProgress: t.projectsSection.inProgress,
                      }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ImageModal projects={projects} modal={modal} setModal={setModal} />
    </>
  );
}