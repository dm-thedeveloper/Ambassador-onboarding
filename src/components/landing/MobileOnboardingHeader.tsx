import Image from "next/image";
import Link from "next/link";
import { landingAssets } from "@/lib/landing-assets";
import { getOnboardingStepPath } from "@/lib/onboarding-routes";
import { MobileOnboardingNav } from "./MobileOnboardingNav";

type MobileOnboardingHeaderProps = {
  activeStep?: number;
};

export function MobileOnboardingHeader({ activeStep = 1 }: MobileOnboardingHeaderProps) {
  return (
    <header className="mobile-onboarding-header lg:hidden">
      <div className="mobile-onboarding-header-top">
        <Link
          href={getOnboardingStepPath(1)}
          className="mobile-onboarding-logo interactive-press"
          aria-label="bea home"
        >
          <Image
            src={landingAssets.logo}
            alt="bea"
            width={640}
            height={240}
            priority
            className="mobile-onboarding-logo-image"
            sizes="3.75rem"
          />
        </Link>
        <Link
          href="/login"
          className="mobile-onboarding-login interactive-link font-[var(--font-weight-bold)] text-[var(--text-primary)] underline-offset-4 hover:underline"
        >
          Log In
        </Link>
      </div>

      <MobileOnboardingNav activeStep={activeStep} />
    </header>
  );
}
