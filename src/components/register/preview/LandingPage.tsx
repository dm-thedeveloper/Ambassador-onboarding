import { AmbassadorsImpactSection } from "./AmbassadorsImpactSection";
import { InviteWaitlistSection } from "./InviteWaitlistSection";
import { CreateAccountSection } from "@/components/register/account/CreateAccountSection";
import { EveryoneCountsSection } from "@/components/register/invites/EveryoneCountsSection";
import { ThreeWaysToWinSection } from "@/components/register/prizes/ThreeWaysToWinSection";
import { HeroSection } from "@/components/register/welcome/HeroSection";
import { PrizesSection } from "@/components/register/welcome/PrizesSection";
import { SchoolAndMarketSection } from "@/components/register/your-school/SchoolAndMarketSection";
import { YouAreInSection } from "@/components/register/youre-in/YouAreInSection";
import { SectionDivider } from "@/components/onboarding/SectionDivider";

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
