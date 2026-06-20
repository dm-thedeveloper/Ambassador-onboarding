import { redirect } from "next/navigation";
import { getOnboardingStepPath } from "@/lib/onboarding-routes";

export default function RegisterIndexPage() {
  redirect(getOnboardingStepPath(1));
}
