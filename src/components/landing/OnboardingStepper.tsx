import { onboardingSteps } from "@/lib/landing-data";

type OnboardingStepperProps = {
  activeStep?: number;
  align?: "start" | "end";
};

export function OnboardingStepper({ activeStep = 1, align = "start" }: OnboardingStepperProps) {
  return (
    <nav
      aria-label="Onboarding progress"
      className={`w-full min-w-0 max-w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
        align === "end" ? "flex justify-end" : "flex justify-start"
      }`}
    >
      <ol className="flex w-max items-center gap-2 sm:gap-4 lg:gap-5 xl:gap-7">
        {onboardingSteps.map((step) => {
          const isActive = step.id === activeStep;

          return (
            <li key={step.id} className="flex items-center gap-1.5 sm:gap-2">
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full lg:h-8 lg:w-8 ${
                  isActive
                    ? "bg-[var(--step-active)]"
                    : "border border-[var(--step-inactive)] bg-transparent"
                }`}
              >
                <span
                  className={`text-xs font-[var(--font-weight-regular)] lg:text-sm ${
                    isActive ? "text-[#ffffff]" : "text-[var(--step-number-inactive)]"
                  }`}
                >
                  {step.id}
                </span>
              </span>
              <span
                className={`whitespace-nowrap text-[0.6875rem] text-[var(--text-primary)] sm:text-[var(--text-body-sm)] ${
                  isActive ? "font-[var(--font-weight-bold)]" : "max-lg:hidden font-[var(--font-weight-regular)]"
                }`}
              >
                {step.label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
