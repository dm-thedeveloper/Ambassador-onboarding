import Link from "next/link";

type BeaLogoProps = {
  className?: string;
  variant?: "dark" | "light";
};

export function BeaLogo({ className = "", variant = "dark" }: BeaLogoProps) {
  const textColor =
    variant === "light" ? "text-[var(--text-inverse)]" : "text-[var(--text-primary)]";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 ${className}`} aria-label="bea home">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[var(--text-primary)]">
        <span className="absolute h-5 w-5 rounded-full bg-[var(--accent-cyan)] opacity-90" />
        <span className="relative h-2 w-2 rounded-full bg-[var(--surface)]" />
      </span>
      <span className={`font-sans text-[1.75rem] leading-none ${textColor}`}>bea</span>
    </Link>
  );
}
