import { SunIcon, MapPinIcon, ShieldIcon, CheckIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

const highlights = [
  "Residential & commercial",
  "Insurance claim specialists",
  "Locally owned in KC",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-deep pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      {/* Sky gradient + sun glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy to-navy-deep" />
      <div className="dot-bg pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-sun/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-ocean/30 blur-3xl" />

      <div className="container-px relative grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sun">
            <SunIcon className="h-4 w-4" />
            Powered by the Kansas City sun
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-cream sm:text-5xl lg:text-6xl">
            Go Solar with
            <br />
            <span className="text-sun">Kansas City&apos;s</span> Solar Pros
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
            {siteConfig.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary text-base">
              Get a Free Quote
            </a>
            <a href="#services" className="btn-on-dark text-base">
              View Services
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-cream/75">
            {highlights.map((h) => (
              <li key={h} className="inline-flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-sun" />
                {h}
              </li>
            ))}
          </ul>

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-cream/60">
            <MapPinIcon className="h-5 w-5 text-ocean" />
            {siteConfig.serviceArea}
          </p>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sun/40 to-ocean/20 blur-2xl" />
            {/* Stylized sun + panel scene */}
            <div className="relative flex h-full w-full flex-col items-center justify-center gap-8 rounded-[2rem] border border-cream/15 bg-gradient-to-br from-[#16486b] to-[#0c2a40] p-10 shadow-2xl">
              <div className="relative">
                <div className="absolute inset-0 animate-spin-slow">
                  <SunIcon className="h-40 w-40 text-sun/40" />
                </div>
                <SunIcon className="h-40 w-40 text-sun drop-shadow-[0_0_25px_rgba(255,176,102,0.6)]" />
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-9 w-9 rounded-sm border border-sky/40 bg-gradient-to-br from-sky/70 to-ocean/80 shadow-inner"
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-cream/15 bg-navy/90 px-6 py-2.5 text-center shadow-lg backdrop-blur">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-sun">
                <ShieldIcon className="h-4 w-4" />
                Licensed &amp; insured
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
