import Image from "next/image";
import type { WinWay } from "@/lib/landing-data";

type WinWayCardProps = {
  way: WinWay;
};

export function WinWayCard({ way }: WinWayCardProps) {
  return (
    <div className="flex items-center gap-5 rounded-[1.125rem] border border-[#e8e4df] bg-[#fdfaf7] px-5 py-5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] lg:px-6">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f2e1d6]">
        <Image
          src={way.icon}
          alt=""
          width={24}
          height={24}
          className="h-6 w-6 object-contain"
        />
      </div>
      <div className="min-w-0">
        <p className="font-display text-[1.25rem] font-[var(--font-weight-bold)] leading-tight text-black lg:text-[1.375rem]">
          {way.title}
        </p>
        <p className="mt-1.5 font-sans text-[0.875rem] leading-[1.45] text-[#757575] lg:text-[0.9375rem]">
          {way.description}
        </p>
      </div>
    </div>
  );
}
