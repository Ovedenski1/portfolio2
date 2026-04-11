"use client";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-300/60 py-6 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          This website is open-source!{" "}
          <a
            href="https://github.com/Ovedenski1/portfolio2"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-slate-700 underline transition hover:text-emerald-500 dark:text-slate-200 dark:hover:text-emerald-300"
          >
            Check out the code on GitHub
          </a>
          . 💚
        </p>
      </div>
    </footer>
  );
}