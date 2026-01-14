import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional Product Designer Sydney | UX/UI Design On Demand",
  description:
    "Hire a senior fractional product designer in Sydney. Get expert UX/UI design leadership for your startup without the full-time commitment. Flexible engagement, real results.",
  keywords: [
    "Fractional Product Designer Sydney",
    "Fractional UX Designer Sydney",
    "Hire fractional designer Sydney",
    "Fractional design services Sydney",
    "Part-time UX designer Sydney",
    "Fractional UX/UI Designer",
    "Contract UX designer Sydney",
    "On-demand product designer Sydney",
    "Fractional design consultant Australia",
    "Outsourced design leadership Australia",
  ],
  openGraph: {
    title: "Fractional Product Designer Sydney | UX/UI Design On Demand",
    description:
      "Hire a senior fractional product designer in Sydney. Get expert UX/UI design leadership for your startup without the full-time commitment.",
    url: "https://lucidux.design/fractional-product-designer-sydney",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional Product Designer Sydney | UX/UI Design On Demand",
    description:
      "Senior UX/UI expertise without the full-time cost. Flexible hours, deep product focus, real results.",
  },
  alternates: {
    canonical: "https://lucidux.design/fractional-product-designer-sydney",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://lucidux.design/fractional-product-designer-sydney",
      url: "https://lucidux.design/fractional-product-designer-sydney",
      name: "Fractional Product Designer Sydney | UX/UI Design On Demand",
      description:
        "Hire a senior fractional product designer in Sydney. Get expert UX/UI design leadership for your startup without the full-time commitment.",
      isPartOf: { "@id": "https://lucidux.design/#website" },
      about: { "@id": "https://lucidux.design/#service" },
    },
    {
      "@type": "Service",
      "@id": "https://lucidux.design/fractional-product-designer-sydney/#service",
      name: "Fractional Product Designer Sydney",
      description:
        "Senior fractional UX/UI designer for Sydney startups. Get expert design leadership on a flexible, part-time basis. UX audits, UI design, design systems, and conversion optimization without the full-time hire.",
      provider: { "@id": "https://lucidux.design/#organization" },
      serviceType: "Fractional Product Design",
      areaServed: [
        { "@type": "City", name: "Sydney" },
        { "@type": "State", name: "New South Wales" },
        { "@type": "Country", name: "Australia" },
      ],
      offers: {
        "@type": "Offer",
        description: "Flexible monthly retainer, typically 10-20 hours per week",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "AUD",
        },
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://lucidux.design/fractional-product-designer-sydney/#localbusiness",
      name: "Lucidux Design - Fractional Product Designer",
      description:
        "Fractional product designer and UX/UI consultant for Sydney startups. Senior design expertise without the full-time cost.",
      url: "https://lucidux.design/fractional-product-designer-sydney",
      email: "gabrielhidalgow@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressRegion: "NSW",
        postalCode: "2000",
        addressCountry: "AU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -33.8688,
        longitude: 151.2093,
      },
      areaServed: [
        { "@type": "City", name: "Sydney" },
        { "@type": "Country", name: "Australia" },
      ],
      priceRange: "$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    },
    {
      "@type": "Person",
      "@id": "https://lucidux.design/#person",
      name: "Gabriel Hidalgo",
      jobTitle: "Fractional Product Designer",
      url: "https://lucidux.design",
      worksFor: { "@id": "https://lucidux.design/#organization" },
      knowsAbout: [
        "Fractional Design",
        "Fractional UX Designer",
        "Fractional Product Designer",
        "UX Design",
        "UI Design",
        "Product Design",
        "Design Systems",
        "Startup Design",
        "Conversion Optimization",
      ],
      sameAs: [
        "https://www.linkedin.com/in/gabrielhidalgow",
        "https://twitter.com/ghidalgodesign",
      ],
    },
  ],
};

export default function FractionalDesignerSydneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
