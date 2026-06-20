import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  showArrow?: boolean;
  href?: string;
};

export function Button({
  children,
  showArrow = false,
  className = "",
  type = "button",
  href,
  ...props
}: ButtonProps) {
  const classes = `btn-cta interactive-press inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xl bg-black px-8 py-[0.9375rem] font-sans text-base font-[var(--font-weight-regular)] leading-none text-white hover:bg-[var(--text-primary)] ${className}`;

  const content = (
    <>
      {children}
      {showArrow ? (
        <span aria-hidden="true" className="text-[1.125rem] leading-none">
          →
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}
