import Image from "next/image";
import { landingAssets } from "@/lib/landing-assets";

type FeaturedPrizeCardProps = {
  className?: string;
};

export function FeaturedPrizeCard({ className = "" }: FeaturedPrizeCardProps) {
  return (
    <Image
      src={landingAssets.featuredPrizeCard}
      alt="National Champion prize of twenty four thousand dollars"
      width={304}
      height={568}
      className={`h-auto w-[16.75rem] max-w-full shrink-0 xl:w-[18.25rem] 2xl:w-[19rem] ${className}`}
      priority
    />
  );
}
