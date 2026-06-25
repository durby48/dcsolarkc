import { Logo } from "@/components/Logo";
import { ShieldIcon, MapPinIcon, SunIcon, CheckIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

const points = [
  "Locally owned and operated in the Kansas City metro",
  "Licensed & insured (general liability + workers' comp)",
  "Specialists in solar removal & reinstall for roofing and insurance claims",
  "Honest, itemized quotes — no high-pressure sales",
];

export function About() {
  return (
    <section id="about" className="bg-cream py-20 sm:py-28">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="eyebrow">About DC Solar KC</span>
          <h2 className="section-heading mt-3">A local solar company you can trust</h2>
          <p className="mt-5 text-lg leading-relaxed text-navy/75">
            DC Solar KC is a Kansas City–based solar company owned by {siteConfig.owner}. We help
            homeowners and businesses across Missouri and Kansas install, maintain, and restore
            solar energy systems.
          </p>
          <p className="mt-4 leading-relaxed text-navy/70">
            What sets us apart is the work other installers shy away from: carefully removing and
            reinstalling solar for roof replacements and insurance claims — including older,
            obsolete systems that need modern, code-compliant equipment to be made whole again.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ocean/15 text-ocean">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-navy/80">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-navy/10 bg-white p-8 shadow-card sm:p-10">
            <Logo className="h-16 w-auto" />
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Stat icon={<MapPinIcon className="h-5 w-5" />} label="Based in" value={siteConfig.baseCity} />
              <Stat icon={<SunIcon className="h-5 w-5" />} label="Focus" value="Solar, start to finish" />
              <Stat icon={<ShieldIcon className="h-5 w-5" />} label="Status" value="Licensed & insured" />
              <Stat icon={<CheckIcon className="h-5 w-5" />} label="Quotes" value="Always free" />
            </div>
            <a href="#contact" className="btn-primary mt-8 w-full">
              Talk to {siteConfig.owner.split(" ")[0]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-navy/10 bg-cream/60 p-4">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-deep text-sun">
        {icon}
      </span>
      <p className="mt-3 text-xs uppercase tracking-wide text-navy/50">{label}</p>
      <p className="text-sm font-semibold text-navy-deep">{value}</p>
    </div>
  );
}
