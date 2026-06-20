import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  showArrow?: boolean;
};

export function Button({
  children,
  showArrow = false,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`btn-cta interactive-press inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xl bg-black px-8 py-[0.9375rem] font-sans text-base font-[var(--font-weight-regular)] leading-none text-white hover:bg-[var(--text-primary)] ${className}`}
      {...props}
    >
      {children}
      {showArrow ? (
        <span aria-hidden="true" className="text-[1.125rem] leading-none">
          →
        </span>
      ) : null}
    </button>
  );
}
