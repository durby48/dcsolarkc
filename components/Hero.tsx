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
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      {/* Pastel sky gradient + warm sun glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky via-sky-soft to-cream" />
      <div className="dot-bg pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-sun/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-white/40 blur-3xl" />

      <div className="container-px relative grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink">
            <SunIcon className="h-4 w-4 text-sun" />
            Powered by the Kansas City sun
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            Go Solar with
            <br />
            <span className="text-ocean">Kansas City&apos;s</span> Solar Pros
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
            {siteConfig.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary text-base">
              Get a Free Quote
            </a>
            <a href="#services" className="btn-secondary text-base">
              View Services
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink/80">
            {highlights.map((h) => (
              <li key={h} className="inline-flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-ocean" />
                {h}
              </li>
            ))}
          </ul>

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-ink/60">
            <MapPinIcon className="h-5 w-5 text-ocean" />
            {siteConfig.serviceArea}
          </p>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sun/40 to-sky/40 blur-2xl" />
            {/* Stylized sun + panel scene */}
            <div className="relative flex h-full w-full flex-col items-center justify-center gap-8 rounded-[2rem] border border-white/70 bg-gradient-to-br from-white to-cream p-10 shadow-card">
              <div className="relative">
                <div className="absolute inset-0 animate-spin-slow">
                  <SunIcon className="h-40 w-40 text-sun-light" />
                </div>
                <SunIcon className="h-40 w-40 text-sun drop-shadow-[0_0_25px_rgba(255,176,102,0.55)]" />
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-9 w-9 rounded-sm border border-ocean/40 bg-gradient-to-br from-sky to-ocean/80 shadow-inner"
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-ink/10 bg-white/90 px-6 py-2.5 text-center shadow-card backdrop-blur">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink">
                <ShieldIcon className="h-4 w-4 text-ocean" />
                Licensed &amp; insured
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
