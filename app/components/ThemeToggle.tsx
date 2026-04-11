"use client";

type ThemeToggleProps = {
  isDark: boolean;
  isAnimating: boolean;
  onToggle: () => void;
};

export default function ThemeToggle({
  isDark,
  isAnimating,
  onToggle,
}: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle theme"
      title="Toggle theme"
      className={`theme-toggle-btn ${
        isDark
          ? "text-slate-200 hover:bg-slate-800"
          : "text-slate-700 hover:bg-slate-100"
      }`}
    >
      <span className={isAnimating ? "theme-toggle-spin" : ""}>
        {isDark ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="theme-toggle-icon fill-current"
          >
            <path d="m12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8c-4.9.1-8.7 4.1-8.7 9 0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2s-.9-.2-1.2.1c-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="theme-toggle-icon"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2.5" />
            <path d="M12 19.5V22" />
            <path d="M4.93 4.93l1.77 1.77" />
            <path d="M17.3 17.3l1.77 1.77" />
            <path d="M2 12h2.5" />
            <path d="M19.5 12H22" />
            <path d="M4.93 19.07l1.77-1.77" />
            <path d="M17.3 6.7l1.77-1.77" />
          </svg>
        )}
      </span>
    </button>
  );
}