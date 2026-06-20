import type { IconType } from "react-icons";
import { FiInstagram, FiMessageSquare, FiShare2 } from "react-icons/fi";
import { PiWhatsappLogo } from "react-icons/pi";

type ShareOption = {
  id: string;
  label: string;
  icon: IconType;
};

const shareOptions: ShareOption[] = [
  { id: "instagram", label: "Instagram", icon: FiInstagram },
  { id: "messages", label: "Messages", icon: FiMessageSquare },
  { id: "whatsapp", label: "Whatsapp", icon: PiWhatsappLogo },
  { id: "share-link", label: "Share link", icon: FiShare2 },
];

export function ShareYourLink() {
  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="h-px flex-1 bg-[var(--section-divider)]" aria-hidden="true" />
        <span className="shrink-0 font-sans text-[0.75rem] font-[var(--font-weight-bold)] uppercase tracking-[0.14em] text-[#9a8060]">
          Share your link
        </span>
        <span className="h-px flex-1 bg-[var(--section-divider)]" aria-hidden="true" />
      </div>

      <div className="mt-7 grid grid-cols-4 gap-2 sm:gap-4">
        {shareOptions.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            className="interactive-press flex min-w-0 flex-col items-center gap-2 sm:gap-3 hover:opacity-80"
          >
            <Icon className="h-6 w-6 text-black sm:h-7 sm:w-7 lg:h-8 lg:w-8" strokeWidth={1.5} />
            <span className="text-center font-sans text-[0.6875rem] leading-tight text-black sm:text-[0.8125rem] lg:text-[0.875rem]">
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
