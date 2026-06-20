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
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-[var(--section-divider)]" aria-hidden="true" />
        <span className="shrink-0 font-sans text-[0.6875rem] font-[var(--font-weight-bold)] uppercase tracking-[0.14em] text-[#9a8060]">
          Share your link
        </span>
        <span className="h-px flex-1 bg-[var(--section-divider)]" aria-hidden="true" />
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {shareOptions.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            className="interactive-press flex min-w-0 flex-col items-center gap-1.5 hover:opacity-80"
          >
            <Icon className="h-5 w-5 text-black lg:h-6 lg:w-6" strokeWidth={1.5} />
            <span className="text-center font-sans text-[0.625rem] leading-tight text-black lg:text-[0.75rem]">
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
