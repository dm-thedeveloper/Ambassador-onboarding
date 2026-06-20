import { landingAssets } from "./landing-assets";

export type OnboardingStep = {
  id: number;
  label: string;
};

export type SchoolInfo = {
  name: string;
  totalSpots: number;
  claimedSpots: number;
  marketContext: string;
};

export type ImpactEquationStep = {
  id: string;
  icon: string;
  label: string;
};

export type WinWay = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export type PrizeTier = {
  id: string;
  badge: string;
  badgeClassName: string;
  title: string;
  description: string;
  illustration: string;
};

export const onboardingSteps: OnboardingStep[] = [
  { id: 1, label: "Welcome" },
  { id: 2, label: "Your School" },
  { id: 3, label: "Prizes" },
  { id: 4, label: "Account creation" },
  { id: 5, label: "Invites" },
  { id: 6, label: "You're In" },
];

export const featuredSchool: SchoolInfo = {
  name: "University of Connecticut",
  totalSpots: 5,
  claimedSpots: 2,
  marketContext: "One of 8 schools participating in Hartford, CT.",
};

export const ambassadorProfile = {
  school: "University of Connecticut",
  link: "datebea.com/link/",
} as const;

export const impactEquationSteps: ImpactEquationStep[] = [
  {
    id: "your-invites",
    icon: landingAssets.everyoneCountsIconYourInvites,
    label: "Your invites",
  },
  {
    id: "their-invites",
    icon: landingAssets.everyoneCountsIconTheirInvites,
    label: "Their invites",
  },
  {
    id: "people-reached",
    icon: landingAssets.everyoneCountsIconPeopleReached,
    label: "People reached",
  },
];

export const winWays: WinWay[] = [
  {
    id: "campus",
    icon: landingAssets.threeWaysIcon1,
    title: "Campus Champion",
    description: "Win at your school and earn cash prizes.",
  },
  {
    id: "market",
    icon: landingAssets.threeWaysIcon2,
    title: "Market Champion",
    description: "The biggest network created in your market wins.",
  },
  {
    id: "national",
    icon: landingAssets.threeWaysIcon3,
    title: "National Champion",
    description: "The biggest network created across the country wins.",
  },
];

export const prizeTiers: PrizeTier[] = [
  {
    id: "campus",
    badge: "TOP PRIZE $240",
    badgeClassName: "bg-[var(--prize-campus-badge-bg)]",
    title: "Campus Champion",
    description: "Win at your school",
    illustration: landingAssets.prizeCampusIllustration,
  },
  {
    id: "market",
    badge: "TOP PRIZE $2400",
    badgeClassName: "bg-[var(--prize-market-badge-bg)]",
    title: "Market Champion",
    description: "Win in your market",
    illustration: landingAssets.prizeMarketIllustration,
  },
  {
    id: "national",
    badge: "TOP PRIZE $24,000",
    badgeClassName: "bg-[var(--prize-national-badge-bg)]",
    title: "National Champion",
    description: "Win across the country",
    illustration: landingAssets.prizeNationalIllustration,
  },
];
