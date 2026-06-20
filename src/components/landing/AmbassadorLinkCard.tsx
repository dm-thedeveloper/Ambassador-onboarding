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
    <div className="rounded-xl px-4 py-3.5 shadow-[0_2px_14px_rgba(0,0,0,0.05)]">
      <p className="text-left text-[0.6875rem] font-[var(--font-weight-bold)] uppercase tracking-[0.14em] text-[#a67233]">
        Your ambassador link
      </p>

      <div className="mt-2.5 flex items-center justify-between gap-3">
        <p className="min-w-0 truncate font-display text-[1.125rem] font-[var(--font-weight-bold)] leading-tight text-black lg:text-[1.25rem]">
          {link}
        </p>
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy ambassador link"
          className="interactive-press shrink-0 text-black hover:opacity-70"
        >
          <FiCopy className="h-4 w-4 stroke-[1.75] lg:h-5 lg:w-5" />
        </button>
      </div>

      <div className="mt-3 h-px w-full bg-[#dcc9bc]" aria-hidden="true" />
    </div>
  );
}
