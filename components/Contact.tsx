import { QuoteForm } from "@/components/QuoteForm";
import { MailIcon, PhoneIcon, MapPinIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-sky-soft to-sky py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-white/40 blur-3xl" />
      <div className="container-px relative grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="eyebrow">Free Quote</span>
          <h2 className="section-heading mt-3">Let&apos;s get your project started</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/75">
            Tell us about your property and what you need — a new install, a removal and reinstall,
            or an insurance claim. We&apos;ll follow up with next steps and a clear, no-pressure
            quote. The more detail you share, the faster we can help.
          </p>

          <ul className="mt-9 space-y-5">
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ocean shadow-sm">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-ink/55">Call or text</p>
                <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} className="font-medium text-ink hover:text-ocean">
                  {siteConfig.phone}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ocean shadow-sm">
                <MailIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-ink/55">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="font-medium text-ink hover:text-ocean">
                  {siteConfig.email}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ocean shadow-sm">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-ink/55">Service Area</p>
                <p className="font-medium text-ink">{siteConfig.serviceArea}</p>
              </div>
            </li>
          </ul>
        </div>

        <QuoteForm />
      </div>
    </section>
  );
}
