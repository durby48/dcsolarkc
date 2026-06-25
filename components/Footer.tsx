import { Logo } from "@/components/Logo";
import { navLinks, siteConfig } from "@/lib/site";

const services = [
  "Residential Solar",
  "Commercial Solar",
  "Removals & Reinstalls",
  "Insurance Claims",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream/10 bg-navy-deep text-cream/70">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo onDark className="h-12 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
              {siteConfig.shortDescription} Locally owned and operated, licensed &amp; insured,
              based in {siteConfig.baseCity}.
            </p>
            <a
              href={`https://${siteConfig.domain}`}
              className="mt-4 inline-block text-sm font-medium text-sun hover:underline"
            >
              {siteConfig.domain}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cream">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-sun">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cream">Get in touch</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} className="transition-colors hover:text-sun">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-sun">
                  {siteConfig.email}
                </a>
              </li>
              {services.map((service) => (
                <li key={service} className="text-cream/55">{service}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row">
          <p>&copy; {year} {siteConfig.legalName}. All rights reserved.</p>
          <p>Kansas City solar &middot; {siteConfig.domain}</p>
        </div>
      </div>
    </footer>
  );
}
