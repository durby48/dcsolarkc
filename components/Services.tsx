import type { ComponentType, SVGProps } from "react";
import {
  HomeIcon,
  BuildingIcon,
  PanelIcon,
  ShieldIcon,
  WrenchIcon,
  CheckIcon,
} from "@/components/icons";

type Service = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  points: string[];
  featured?: boolean;
};

const services: Service[] = [
  {
    icon: HomeIcon,
    title: "Residential Solar Installation",
    description:
      "Custom rooftop and ground-mount solar systems designed to cut your home's energy bills and lock in predictable power for decades.",
    points: ["Custom system design", "Rooftop & ground mount", "Battery-ready options"],
  },
  {
    icon: BuildingIcon,
    title: "Commercial Solar",
    description:
      "Scalable solar for businesses, warehouses, and multi-unit properties — reduce operating costs and strengthen your bottom line.",
    points: ["Low-slope & flat roofs", "Energy cost analysis", "Minimal downtime installs"],
  },
  {
    icon: ShieldIcon,
    title: "Removals & Reinstalls for Insurance Claims",
    description:
      "Our specialty: safely removing and reinstalling solar for roof replacements and storm/insurance claims — with the documentation adjusters need.",
    points: ["Roofing-coordinated R&R", "Claim documentation & photos", "Obsolete-system restoration"],
    featured: true,
  },
  {
    icon: WrenchIcon,
    title: "Repairs & Maintenance",
    description:
      "Keep your system producing at its peak with inspections, troubleshooting, component replacement, and performance tune-ups.",
    points: ["System inspections", "Component replacement", "Performance checkups"],
  },
];

export function Services() {
  return (
    <section id="services" className="sky-bg py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-heading mt-3">Solar services for every property</h2>
          <p className="mt-5 text-lg leading-relaxed text-navy/70">
            From brand-new installs to the tricky removal-and-reinstall work other companies
            avoid, DC Solar KC handles the full lifecycle of your solar system.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`card hover:-translate-y-1 hover:shadow-card-hover ${
                  service.featured ? "ring-2 ring-sun" : ""
                }`}
              >
                {service.featured && (
                  <span className="mb-4 inline-block rounded-full bg-sun/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-deep">
                    Our Specialty
                  </span>
                )}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-deep text-sun">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy-deep">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-navy/70">{service.description}</p>
                <ul className="mt-5 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm text-navy/80">
                      <CheckIcon className="h-4 w-4 shrink-0 text-ocean" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 rounded-2xl border border-navy/10 bg-white/70 px-6 py-5 text-center">
          <PanelIcon className="hidden h-8 w-8 shrink-0 text-ocean sm:block" />
          <p className="text-navy/80">
            Need solar taken down for a roof replacement or storm claim?{" "}
            <a href="#contact" className="font-semibold text-ocean underline-offset-2 hover:underline">
              We handle removals &amp; reinstalls
            </a>{" "}
            — including obsolete systems no longer supported by the manufacturer.
          </p>
        </div>
      </div>
    </section>
  );
}
