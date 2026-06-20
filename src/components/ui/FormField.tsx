type FormFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "password";
  hint?: string;
  compact?: boolean;
};

export function FormField({
  id,
  label,
  placeholder,
  type = "text",
  hint,
  compact = false,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className={`block font-sans font-[var(--font-weight-bold)] text-black ${
          compact ? "mb-1.5 text-[0.875rem]" : "mb-2 text-[0.9375rem]"
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-xl border-0 bg-white px-4 font-sans text-black outline-none placeholder:text-[#b8b8b8] focus:ring-2 focus:ring-black/10 ${
          compact ? "py-2.5 text-[0.875rem]" : "py-3.5 text-[0.9375rem]"
        }`}
      />
      {hint ? (
        <p
          className={`font-sans text-[var(--text-secondary)] ${
            compact ? "mt-1 text-[0.75rem]" : "mt-2 text-[0.8125rem]"
          }`}
        >
          {hint}
        </p>
      ) : null}
    </div>
  );
}
