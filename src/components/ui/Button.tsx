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
      className={`inline-flex min-w-[15.5rem] items-center justify-center gap-2.5 rounded-xl bg-black px-12 py-[0.9375rem] font-sans text-base font-[var(--font-weight-regular)] leading-none text-white transition-colors hover:bg-[var(--text-primary)] ${className}`}
      {...props}
    >
      <span>{children}</span>
      {showArrow ? (
        <span aria-hidden="true" className="text-[1.125rem] leading-none">
          →
        </span>
      ) : null}
    </button>
  );
}
