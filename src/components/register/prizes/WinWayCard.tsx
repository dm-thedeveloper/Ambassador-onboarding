import Image from "next/image";
import type { WinWay } from "@/lib/landing-data";

type WinWayCardProps = {
  way: WinWay;
};

export function WinWayCard({ way }: WinWayCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-[#e8e4df] bg-[#fdfaf7] px-4 py-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f2e1d6]">
        <Image
          src={way.icon}
          alt=""
          width={24}
          height={24}
          className="h-5 w-5 object-contain"
        />
      </div>
      <div className="min-w-0">
        <p className="font-sans text-[0.875rem] font-[var(--font-weight-bold)] leading-tight text-black">
          {way.title}
        </p>
        <p className="mt-1 font-sans text-[0.75rem] leading-snug text-[#757575]">
          {way.description}
        </p>
      </div>
    </div>
  );
}
