import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { OnboardingHeader } from "./OnboardingHeader";

export function CreateAccountSection() {
  return (
    <section className="flex w-full flex-col overflow-hidden lg:min-h-screen">
      <OnboardingHeader activeStep={4} />

      <div className="flex flex-1 flex-col px-6 py-10 pb-12 lg:px-12 lg:py-12 xl:px-16">
        <div className="w-full lg:w-1/2 lg:max-w-[50%]">
          <p className="text-[var(--text-body-sm)] font-[var(--font-weight-bold)] uppercase tracking-[0.12em] text-[var(--accent-gold)]">
            Step 4 of 6
          </p>
          <h2 className="mt-3 font-sans text-[clamp(2.25rem,4vw,3.75rem)] font-[450] leading-[1.08] tracking-normal text-black">
            Create your account
          </h2>
          <p className="mt-6 max-w-[28rem] font-sans text-[clamp(1.0625rem,1.2vw,1.125rem)] font-[var(--font-weight-regular)] leading-[1.5] text-[var(--hero-subtext-color)] lg:max-w-none">
            Build your profile, track your impact, and climb the leaderboard
          </p>

          <form className="mt-8 flex flex-col gap-5" noValidate>
            <FormField
              id="full-name"
              label="Full Name"
              placeholder="Enter your full name"
            />
            <FormField
              id="email"
              label="Email Address"
              type="email"
              placeholder="Enter your email"
            />
            <FormField
              id="password"
              label="Password"
              type="password"
              placeholder="Create your password"
              hint="Must be at least 8 characters"
            />

            <div className="pt-1">
              <Button type="submit" className="w-full min-w-0 max-w-none">
                Create account
              </Button>
            </div>
          </form>

          <div className="mt-7 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--section-divider)]" aria-hidden="true" />
            <span className="shrink-0 font-sans text-[0.8125rem] text-[var(--text-secondary)]">
              or continue with
            </span>
            <span className="h-px flex-1 bg-[var(--section-divider)]" aria-hidden="true" />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="rounded-xl border border-[var(--section-divider)] bg-white px-4 py-3 font-sans text-[0.9375rem] font-[var(--font-weight-regular)] text-black transition-colors hover:bg-[var(--surface-warm)]"
            >
              Google
            </button>
            <button
              type="button"
              className="rounded-xl border border-[var(--section-divider)] bg-white px-4 py-3 font-sans text-[0.9375rem] font-[var(--font-weight-regular)] text-black transition-colors hover:bg-[var(--surface-warm)]"
            >
              Apple
            </button>
          </div>

          <p className="mt-8 font-sans text-[0.8125rem] leading-relaxed text-[var(--text-secondary)]">
            By creating an account, you agree to our{" "}
            <Link
              href="/terms"
              className="font-[var(--font-weight-bold)] text-[var(--accent-sage)] hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="font-[var(--font-weight-bold)] text-[var(--accent-sage)] hover:underline"
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
