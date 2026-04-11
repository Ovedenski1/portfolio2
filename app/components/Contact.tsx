"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import type { Language } from "../lib/translations";
import { translations } from "../lib/translations";

type ContactSectionProps = {
  language: Language;
};

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactSection({ language }: ContactSectionProps) {
  const t = translations[language];
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const WEB3FORMS_ACCESS_KEY = "26aaf52b-f3bb-444e-82a9-d068d35b9033";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setFormState("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New portfolio contact form message");
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormState("success");
        form.reset();
        return;
      }

      setFormState("error");
      setErrorMessage(data.message || t.contactSection.errorMessage);
    } catch {
      setFormState("error");
      setErrorMessage(t.contactSection.errorMessage);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div
        className="pointer-events-none absolute left-[10%] top-[20%] h-44 w-44 rounded-full bg-emerald-300/10 blur-3xl"
        style={{ animation: "floatOrb 10s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute right-[12%] bottom-[10%] h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl"
        style={{ animation: "floatOrb 12s ease-in-out infinite 1s" }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center lg:mb-16">
          <div className="mx-auto mb-8 h-px max-w-6xl bg-slate-300/70 dark:bg-white/10" />
          <h2 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
            {t.contactSection.title}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="rounded-[28px] border border-slate-300/70 bg-white/70 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.10)] backdrop-blur dark:border-white/10 dark:bg-slate-950/45 dark:shadow-[0_18px_45px_rgba(2,8,23,0.25)] sm:p-7">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              {t.contactSection.formTitle}
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  {t.contactSection.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={t.contactSection.namePlaceholder}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  {t.contactSection.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={t.contactSection.emailPlaceholder}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  {t.contactSection.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder={t.contactSection.messagePlaceholder}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                />
              </div>

              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <button
                type="submit"
                disabled={formState === "loading"}
                className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full border border-emerald-400/55 bg-white/80 px-6 text-sm font-semibold text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:border-emerald-400/80 hover:bg-white disabled:cursor-not-allowed disabled:opacity-70 dark:bg-slate-900/70 dark:text-slate-100 dark:shadow-[0_8px_24px_rgba(15,23,42,0.18)] dark:hover:bg-slate-900"
              >
                {formState === "loading"
                  ? t.contactSection.sending
                  : t.contactSection.send}
              </button>

              {formState === "success" ? (
                <p className="text-sm font-medium text-emerald-500 dark:text-emerald-300">
                  {t.contactSection.successMessage}
                </p>
              ) : null}

              {formState === "error" ? (
                <p className="text-sm font-medium text-rose-500">
                  {errorMessage}
                </p>
              ) : null}
            </form>
          </div>

          <div className="flex flex-col items-center justify-center gap-10 px-2 py-4">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              {t.contactSection.reachOut}
            </h3>

            <div className="flex items-center justify-center gap-6">
              <a
                href="https://www.facebook.com/luboslav.ovedenski/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-slate-600 transition hover:-translate-y-0.5 hover:text-emerald-500 dark:text-slate-300 dark:hover:text-emerald-300"
              >
                <FaFacebookF className="h-7 w-7" />
              </a>

              <a
                href="https://www.linkedin.com/in/lyuboslav-ovedenski/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-slate-600 transition hover:-translate-y-0.5 hover:text-emerald-500 dark:text-slate-300 dark:hover:text-emerald-300"
              >
                <FaLinkedinIn className="h-7 w-7" />
              </a>

              <a
                href="https://github.com/Ovedenski1"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-slate-600 transition hover:-translate-y-0.5 hover:text-emerald-500 dark:text-slate-300 dark:hover:text-emerald-300"
              >
                <FaGithub className="h-7 w-7" />
              </a>
            </div>

            <div className="flex flex-col items-center gap-6 text-center">
              <a
                href="mailto:ovedenski1@gmail.com"
                className="flex items-center gap-3 text-slate-700 transition hover:text-emerald-500 dark:text-slate-200 dark:hover:text-emerald-300"
              >
                <Mail className="h-5 w-5" />
                <span className="text-lg font-semibold">
                  ovedenski1@gmail.com
                </span>
              </a>

              <a
                href="tel:+359893221860"
                className="flex items-center gap-3 text-slate-700 transition hover:text-emerald-500 dark:text-slate-200 dark:hover:text-emerald-300"
              >
                <Phone className="h-5 w-5" />
                <span className="text-lg font-semibold">
                  +359 893 221 860
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}