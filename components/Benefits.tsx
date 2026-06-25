import type { ComponentType, SVGProps } from "react";
import {
  SavingsIcon,
  HouseValueIcon,
  LeafIcon,
  BoltIcon,
} from "@/components/icons";

type Benefit = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: SavingsIcon,
    title: "Lower Energy Bills",
    description:
      "Generate your own power and protect yourself from rising utility rates — many homeowners see savings from day one.",
  },
  {
    icon: HouseValueIcon,
    title: "Increase Property Value",
    description:
      "Solar is a sought-after upgrade that can boost resale value and make your home or building stand out.",
  },
  {
    icon: BoltIcon,
    title: "Energy Independence",
    description:
      "Pair panels with battery storage to keep the lights on and reduce reliance on the grid during outages.",
  },
  {
    icon: LeafIcon,
    title: "Clean, Renewable Energy",
    description:
      "Cut your carbon footprint with decades of quiet, maintenance-light power straight from the Kansas City sun.",
  },
];

export function Benefits() {
  return (
    <section id="why-solar" className="relative overflow-hidden bg-sky-soft py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-sun/25 blur-3xl" />
      <div className="container-px relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why Go Solar</span>
          <h2 className="section-heading mt-3">The bright side of going solar</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            Switching to solar is one of the smartest long-term investments you can make for your
            property — here&apos;s what it delivers.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="rounded-2xl border border-ink/10 bg-white/70 p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sun text-ink">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-sun/40 bg-sun/15 p-6 text-center">
          <p className="text-ink/85">
            <span className="font-semibold text-ink">Federal &amp; local incentives</span> can
            significantly reduce the cost of going solar. We&apos;ll help you understand what you
            qualify for during your free consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
