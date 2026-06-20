import { AmbassadorsImpactSection } from "./AmbassadorsImpactSection";
import { CreateAccountSection } from "./CreateAccountSection";
import { EveryoneCountsSection } from "./EveryoneCountsSection";
import { HeroSection } from "./HeroSection";
import { InviteWaitlistSection } from "./InviteWaitlistSection";
import { PrizesSection } from "./PrizesSection";
import { SchoolAndMarketSection } from "./SchoolAndMarketSection";
import { SectionDivider } from "./SectionDivider";
import { ThreeWaysToWinSection } from "./ThreeWaysToWinSection";
import { YouAreInSection } from "./YouAreInSection";

export function LandingPage() {
  return (
    <div className="min-h-full overflow-x-hidden bg-[var(--background)]">
      <HeroSection />
      <SectionDivider />
      <PrizesSection />
      <SchoolAndMarketSection />
      <AmbassadorsImpactSection />
      <ThreeWaysToWinSection />
      <InviteWaitlistSection />
      <CreateAccountSection />
      <EveryoneCountsSection />
      <YouAreInSection />
      <SectionDivider />
    </div>
  );
}