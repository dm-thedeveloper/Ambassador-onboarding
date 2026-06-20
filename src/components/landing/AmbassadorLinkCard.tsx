"use client";

import { FiCopy } from "react-icons/fi";

type AmbassadorLinkCardProps = {
  link: string;
};

export function AmbassadorLinkCard({ link }: AmbassadorLinkCardProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
    } catch {
      // Clipboard unavailable
    }
  };

  return (
    <div className="rounded-[1.125rem] px-4 py-5 shadow-[0_2px_14px_rgba(0,0,0,0.05)] sm:px-6 sm:py-6 lg:px-8 lg:py-7">
      <p className="text-left text-[0.6875rem] font-[var(--font-weight-bold)] uppercase tracking-[0.14em] text-[#a67233] lg:text-[0.75rem]">
        Your ambassador link
      </p>

      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="min-w-0 truncate font-display text-[clamp(1.5rem,2.4vw,2.125rem)] font-[var(--font-weight-bold)] leading-tight text-black">
          {link}
        </p>
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy ambassador link"
          className="interactive-press shrink-0 text-black hover:opacity-70"
        >
          <FiCopy className="h-5 w-5 stroke-[1.75]" />
        </button>
      </div>

      <div className="mt-5 h-px w-full bg-[#dcc9bc]" aria-hidden="true" />
    </div>
  );
}
