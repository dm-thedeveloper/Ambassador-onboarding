import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { OnboardingHeader } from "@/components/onboarding/OnboardingHeader";
import { getOnboardingStepPath } from "@/lib/onboarding-routes";

type CreateAccountSectionProps = {
  activeStep?: number;
};

export function CreateAccountSection({ activeStep = 4 }: CreateAccountSectionProps) {
  return (
    <section className="step-screen">
      <OnboardingHeader activeStep={activeStep} />

      <div className="flex min-h-0 flex-1 flex-col justify-center overflow-hidden px-4 pt-4 pb-[calc(1rem+5px)] sm:px-6 lg:px-12 lg:py-6 xl:px-16">
        <div className="step-enter w-full lg:w-1/2 lg:max-w-[50%]">
          <p className="text-[var(--text-body-sm)] font-[var(--font-weight-bold)] uppercase tracking-[0.12em] text-[var(--accent-gold)]">
            Step 4 of 6
          </p>
          <h2 className="step-heading mt-2">
            Create your account
          </h2>
          <p className="step-lead mt-3 max-w-[28rem] lg:max-w-none">
            Build your profile, track your impact, and climb the leaderboard
          </p>

          <form className="mt-5 flex flex-col gap-3.5" noValidate>
            <FormField
              id="full-name"
              label="Full Name"
              placeholder="Enter your full name"
              compact
            />
            <FormField
              id="email"
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              compact
            />
            <FormField
              id="password"
              label="Password"
              type="password"
              placeholder="Create your password"
              hint="Must be at least 8 characters"
              compact
            />

            <div className="w-full pt-0.5">
              <Button className="btn-cta-full" href={getOnboardingStepPath(5)}>
                Create account
              </Button>
            </div>
          </form>

          <div className="mt-4 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--section-divider)]" aria-hidden="true" />
            <span className="shrink-0 font-sans text-[0.75rem] text-[var(--text-secondary)]">
              or continue with
            </span>
            <span className="h-px flex-1 bg-[var(--section-divider)]" aria-hidden="true" />
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2.5">
            <button
              type="button"
              className="interactive-press rounded-xl border border-[var(--section-divider)] bg-white px-4 py-2.5 font-sans text-[0.875rem] font-[var(--font-weight-regular)] text-black hover:bg-[var(--surface-warm)]"
            >
              Google
            </button>
            <button
              type="button"
              className="interactive-press rounded-xl border border-[var(--section-divider)] bg-white px-4 py-2.5 font-sans text-[0.875rem] font-[var(--font-weight-regular)] text-black hover:bg-[var(--surface-warm)]"
            >
              Apple
            </button>
          </div>

          <p className="mt-4 font-sans text-[0.75rem] leading-relaxed text-[var(--text-secondary)]">
            By creating an account, you agree to our{" "}
            <Link
              href="/terms"
              className="interactive-link font-[var(--font-weight-bold)] text-[var(--accent-sage)] hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="interactive-link font-[var(--font-weight-bold)] text-[var(--accent-sage)] hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
