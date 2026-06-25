const faqs = [
  {
    q: "Do you handle solar removal and reinstallation for roof replacements?",
    a: "Yes — this is one of our specialties. We safely remove your panels and mounting hardware, coordinate with your roofer, and reinstall everything once the new roof is on. We document the process for insurance and warranty purposes.",
  },
  {
    q: "Can you help with a solar insurance claim?",
    a: "Absolutely. We provide professional assessments, photo documentation, and itemized quotes that adjusters need. If your existing system uses obsolete equipment that's no longer manufactured, we'll specify modern, code-compliant replacements to restore it to working condition.",
  },
  {
    q: "Do you install solar for both homes and businesses?",
    a: "Yes. We design and install residential rooftop and ground-mount systems as well as commercial solar for businesses, warehouses, and multi-unit properties.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve the greater Kansas City metro across Missouri and Kansas, based out of Lee's Summit. If you're not sure whether you're in our area, just reach out.",
  },
  {
    q: "Are there incentives or tax credits for going solar?",
    a: "Often, yes. Federal and local incentives can meaningfully reduce the cost of a new system. We'll walk you through what you may qualify for during your free consultation — though we always recommend confirming details with a tax professional.",
  },
  {
    q: "How do I get a quote?",
    a: "Fill out the form below or call us directly. We'll learn about your property and goals, then provide a clear, itemized quote with no pressure.",
  },
];

export function Faqs() {
  return (
    <section id="faqs" className="bg-cream py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Questions</span>
          <h2 className="section-heading mt-3">Frequently asked questions</h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-navy/10 overflow-hidden rounded-2xl border border-navy/10 bg-white/70">
          {faqs.map((faq) => (
            <details key={faq.q} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-navy-deep">
                {faq.q}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-deep text-cream transition-transform duration-200 group-open:rotate-45">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-navy/70">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
