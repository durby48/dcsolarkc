import { ChatIcon, PanelIcon, BoltIcon, SunIcon } from "@/components/icons";

const steps = [
  {
    n: "01",
    icon: ChatIcon,
    title: "Free Consultation",
    description:
      "Tell us about your property and goals. We assess your roof, energy usage, and the best path forward — including any insurance or roofing coordination.",
  },
  {
    n: "02",
    icon: PanelIcon,
    title: "Custom Design & Quote",
    description:
      "We design a system sized for your needs and provide a clear, itemized quote with expected production and savings.",
  },
  {
    n: "03",
    icon: BoltIcon,
    title: "Professional Installation",
    description:
      "Our licensed, insured crew installs (or removes and reinstalls) your system safely, cleanly, and to code — with documentation along the way.",
  },
  {
    n: "04",
    icon: SunIcon,
    title: "Power On & Support",
    description:
      "We commission your system, walk you through monitoring, and stand behind the work with ongoing support and maintenance.",
  },
];

export function Process() {
  return (
    <section id="process" className="sky-bg py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How It Works</span>
          <h2 className="section-heading mt-3">A simple path to solar</h2>
          <p className="mt-5 text-lg leading-relaxed text-navy/70">
            We keep the process straightforward and transparent from first call to power-on.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.n} className="relative rounded-2xl border border-navy/10 bg-white/70 p-7 shadow-card">
                <span className="font-display text-4xl font-extrabold text-sun/40">{step.n}</span>
                <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-deep text-sun">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-deep">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy/70">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
