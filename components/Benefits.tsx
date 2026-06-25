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
    <section id="why-solar" className="relative overflow-hidden bg-navy-deep py-20 text-cream sm:py-28">
      <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-sun/20 blur-3xl" />
      <div className="container-px relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-sun">Why Go Solar</span>
          <h2 className="section-heading mt-3 text-cream">The bright side of going solar</h2>
          <p className="mt-5 text-lg leading-relaxed text-cream/75">
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
                className="rounded-2xl border border-cream/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sun text-navy-deep">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-cream">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-sun/30 bg-sun/10 p-6 text-center">
          <p className="text-cream/90">
            <span className="font-semibold text-sun">Federal &amp; local incentives</span> can
            significantly reduce the cost of going solar. We&apos;ll help you understand what you
            qualify for during your free consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
