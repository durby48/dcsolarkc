import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Benefits } from "@/components/Benefits";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Faqs } from "@/components/Faqs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SolarInstallationBusiness",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  founder: siteConfig.owner,
  priceRange: "$$",
  areaServed: siteConfig.serviceArea,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lee's Summit",
    addressRegion: "MO",
    addressCountry: "US",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Process />
        <About />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
