import { QuoteForm } from "@/components/QuoteForm";
import { MailIcon, PhoneIcon, MapPinIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="bg-navy-deep py-20 sm:py-28">
      <div className="container-px grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="eyebrow text-sun">Free Quote</span>
          <h2 className="section-heading mt-3 text-cream">Let&apos;s get your project started</h2>
          <p className="mt-5 text-lg leading-relaxed text-cream/75">
            Tell us about your property and what you need — a new install, a removal and reinstall,
            or an insurance claim. We&apos;ll follow up with next steps and a clear, no-pressure
            quote. The more detail you share, the faster we can help.
          </p>

          <ul className="mt-9 space-y-5">
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-sun">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-cream/50">Call or text</p>
                <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} className="text-cream hover:text-sun">
                  {siteConfig.phone}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-sun">
                <MailIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-cream/50">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="text-cream hover:text-sun">
                  {siteConfig.email}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-sun">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-cream/50">Service Area</p>
                <p className="text-cream">{siteConfig.serviceArea}</p>
              </div>
            </li>
          </ul>
        </div>

        <QuoteForm />
      </div>
    </section>
  );
}
