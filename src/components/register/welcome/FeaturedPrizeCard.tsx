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
      width={1086}
      height={1448}
      sizes="(max-width: 1024px) 100vw, 19rem"
      quality={90}
      className={`h-auto w-full shrink-0 lg:mx-0 lg:w-auto lg:max-w-[17rem] xl:max-w-[18.25rem] 2xl:max-w-[19rem] ${className}`}
      priority
    />
  );
}
