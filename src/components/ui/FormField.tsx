type FormFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "password";
  hint?: string;
};

export function FormField({
  id,
  label,
  placeholder,
  type = "text",
  hint,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-sans text-[0.9375rem] font-[var(--font-weight-bold)] text-black"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border-0 bg-white px-4 py-3.5 font-sans text-[0.9375rem] text-black outline-none placeholder:text-[#b8b8b8] focus:ring-2 focus:ring-black/10"
      />
      {hint ? (
        <p className="mt-2 font-sans text-[0.8125rem] text-[var(--text-secondary)]">{hint}</p>
      ) : null}
    </div>
  );
}
