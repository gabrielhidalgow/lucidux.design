import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lucidux.design'),
  title: "LUCIDUX — UX/UI Design for AI-Built Startups | Free UX Audit",
  description: "Users confused by your AI-built app? Conversion rate stuck? I help startup founders fix UX problems fast. Product design help, UX audits, and design systems for Cursor, v0, Bolt, and vibe-coded products.",
  keywords: [
    // Problem-based (high intent)
    "fix my app UX", "improve startup conversion", "users confused by my app", "bad user experience fix",
    "my app conversion is bad", "why users abandon my app", "how to fix bad UX", "signup flow not working",
    // AI-tool specific
    "improve AI generated UI", "fix cursor app design", "v0 app design review", "bolt app UX help",
    "AI built app looks bad", "vibe coded app UX", "cursor generated UI fix", "AI startup UX",
    // Help-seeking
    "need UX help fast", "quick UX review", "someone to review my UX", "startup UX on a budget",
    "need help with product design", "UX expert for startup",
    // Core services
    "UX designer", "UI designer", "startup design", "UX audit", "design systems",
    "product design help", "UX design partner", "design partner for startups",
    "fractional UX designer", "startup UX consultant", "MVP design", "conversion optimization",
    // Location
    "Sydney UX designer", "Sydney UI designer", "Australian design consultant",
    // Mobile app specific
    "mobile app UX design", "iOS app designer", "Android app UX", "mobile app conversion",
    "fix mobile app UX", "mobile app usability", "app store optimization UX",
    // Web app / SaaS specific
    "SaaS UX design", "web app UX", "dashboard UX design", "SaaS conversion optimization",
    "web application design", "B2B SaaS designer", "SaaS onboarding UX",
    // Website specific
    "website UX", "landing page UX", "website conversion optimization",
    "fix website conversion", "landing page designer",
    // AI agency/expert positioning
    "AI UX design agency", "UX agency for AI startups", "AI design consultant",
    "AI product design agency", "UX expert for AI products", "AI focused design agency",
    "design agency for AI companies", "AI product designer", "AI UX consultant",
  ],
  authors: [{ name: "Gabriel Hidalgo" }],
  creator: "Gabriel Hidalgo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lucidux.design",
    siteName: "Lucidux Design",
    title: "LUCIDUX — UX/UI Design for AI-Built Startups",
    description: "Users confused by your AI-built app? I help founders fix UX problems fast. Product design help, UX audits, and design systems for Cursor, v0, Bolt, and vibe-coded products.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LUCIDUX — UX/UI Design for AI-Built Startups",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LUCIDUX — UX/UI Design for AI-Built Startups",
    description: "Users confused by your AI-built app? I fix UX problems fast. Design help for Cursor, v0, Bolt, and vibe-coded products.",
    creator: "@gabrielhidalgo",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization
    {
      "@type": "Organization",
      "@id": "https://lucidux.design/#organization",
      name: "Lucidux Design",
      alternateName: ["Lucidux", "Lucidux UX Design", "Gabriel Hidalgo Design", "Lucidux Design Studio"],
      url: "https://lucidux.design",
      logo: {
        "@type": "ImageObject",
        url: "https://lucidux.design/og-image.jpg",
        width: 1200,
        height: 630,
      },
      founder: { "@id": "https://lucidux.design/#person" },
      sameAs: [
        "https://www.linkedin.com/in/gabrielhidalgo",
        "https://twitter.com/gabrielhidalgo",
      ],
    },
    // Person (Founder)
    {
      "@type": "Person",
      "@id": "https://lucidux.design/#person",
      name: "Gabriel Hidalgo",
      jobTitle: "UX/UI Design Consultant",
      url: "https://lucidux.design",
      worksFor: { "@id": "https://lucidux.design/#organization" },
      knowsAbout: [
        "UX Design",
        "UI Design",
        "Product Design",
        "User Research",
        "Usability Testing",
        "Design Systems",
        "AI Products",
        "Startup Design",
        "MVP Design",
        "Conversion Optimization",
        "Design Partner",
        "Fractional Design",
        "UX Consulting",
        "Interface Design",
        "Mobile App Design",
        "Web App Design",
        "Website Design",
        "SaaS Design",
        "Landing Page Design",
        "Dashboard Design",
        "AI Product Design",
        "AI UX Design",
      ],
      sameAs: [
        "https://www.linkedin.com/in/gabrielhidalgo",
        "https://twitter.com/gabrielhidalgo",
      ],
    },
    // ProfessionalService
    {
      "@type": "ProfessionalService",
      "@id": "https://lucidux.design/#service",
      name: "Lucidux Design",
      description: "Sydney-based UX/UI consultant for technical founders building AI products. Specializing in user journey optimization, usability improvements, and scalable design systems.",
      url: "https://lucidux.design",
      provider: { "@id": "https://lucidux.design/#organization" },
      serviceType: ["UX Design", "UI Design", "UX Audit", "Design Systems", "Conversion Optimization"],
      areaServed: [
        { "@type": "City", name: "Sydney" },
        { "@type": "State", name: "New South Wales" },
        { "@type": "Country", name: "Australia" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressRegion: "NSW",
        addressCountry: "AU",
      },
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "7",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Michael John Doring" },
          reviewBody: "If you're on the hunt for a UX designer who's not only good but also super easy and fast to work with, Gabriel's your man. Really pleased with how everything turned out.",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Yashu Singh" },
          reviewBody: "You come across as someone with great knowledge of your topic and bring a lot of experience to make things better.",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Mark Dawes" },
          reviewBody: "Gabriel is really easy to work with and his output was excellent.",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Andrew Barton" },
          reviewBody: "Gabriel has been working with us for the better part of two years. We have and continue to be happy with his flexibility in meeting our timeframes, collaboration and excellent result!",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Ram Prakash K" },
          reviewBody: "Gabriel consistently brought a strong eye for detail, deep understanding of design systems, and a knack for translating complex requirements into elegant UI solutions.",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Alan Ung" },
          reviewBody: "One of the most commendable aspects of your work on the CBA project has been your proactive communication. Your highly positive work ethic is evident in the way you promptly address queries.",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Mourad Kessas" },
          reviewBody: "I've had the pleasure of working with Gabriel on multiple projects, and the results have always been exceptional. He's creative, prompt, and very easy to work with.",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
      ],
    },
    // LocalBusiness (for local search "Sydney UX designer")
    {
      "@type": "LocalBusiness",
      "@id": "https://lucidux.design/#localbusiness",
      name: "Lucidux Design",
      description: "UX/UI design partner for startup founders in Sydney. Product design help, UX audits, usability testing, and design systems.",
      url: "https://lucidux.design",
      telephone: "",
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
        { "@type": "Country", name: "New Zealand" },
      ],
      priceRange: "$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    },
    // Individual Services
    {
      "@type": "Service",
      name: "UX Audit",
      description: "Expert review of your interface to spot critical issues in minutes—visual hierarchy, cognitive load, and interaction gaps that AI tools consistently miss.",
      provider: { "@id": "https://lucidux.design/#organization" },
      serviceType: "UX Audit",
      areaServed: { "@type": "Country", name: "Australia" },
    },
    {
      "@type": "Service",
      name: "UX Strategy",
      description: "Prioritized design roadmap based on audit findings. Clear recommendations on what's costing conversions now vs. what can wait, with expected impact.",
      provider: { "@id": "https://lucidux.design/#organization" },
      serviceType: "UX Strategy",
      areaServed: { "@type": "Country", name: "Australia" },
    },
    {
      "@type": "Service",
      name: "Usability Testing",
      description: "Remote and in-person testing sessions that reveal friction points analytics can't explain. Real users navigate your product while insights are captured.",
      provider: { "@id": "https://lucidux.design/#organization" },
      serviceType: "Usability Testing",
      areaServed: { "@type": "Country", name: "Australia" },
    },
    {
      "@type": "Service",
      name: "Design Systems",
      description: "Scalable design systems that grow with your product. Consistent components, documentation, and guidelines for your development team.",
      provider: { "@id": "https://lucidux.design/#organization" },
      serviceType: "Design Systems",
      areaServed: { "@type": "Country", name: "Australia" },
    },
    {
      "@type": "Service",
      name: "Ongoing UX Support",
      description: "Weekly strategic consultation, async feedback, and design review before development. Expert eyes on every change without a full-time hire.",
      provider: { "@id": "https://lucidux.design/#organization" },
      serviceType: "UX Consulting",
      areaServed: { "@type": "Country", name: "Australia" },
    },
    // FAQPage
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is AI design consulting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI design consulting helps businesses integrate artificial intelligence tools into their design workflows. I assess your current processes, recommend the right AI tools, implement them, and train your team to use them effectively.",
          },
        },
        {
          "@type": "Question",
          name: "How is this different from hiring a traditional designer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlike traditional designers who create assets manually, I focus on building systems and workflows that leverage AI to multiply your team's output. The goal is to make your existing team more efficient, not replace them.",
          },
        },
        {
          "@type": "Question",
          name: "What AI tools do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I work with a range of AI tools including Midjourney, DALL-E, Stable Diffusion for image generation, as well as Figma AI, Adobe Firefly, and various automation tools. The specific tools depend on your needs and existing tech stack.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a typical engagement take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most projects run 2-8 weeks depending on scope. A basic audit and strategy takes 2-3 weeks, while a full implementation with training can take 6-8 weeks. I also offer ongoing support packages.",
          },
        },
        {
          "@type": "Question",
          name: "Is this suitable for small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. I work with teams of 5-50 people. Small businesses often see the biggest ROI because AI tools can dramatically reduce the need for expensive agency work or additional hires.",
          },
        },
        {
          "@type": "Question",
          name: "What's the investment for AI design consulting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Projects typically range from $5,000-$25,000 depending on scope and complexity. I offer fixed-fee packages so you know exactly what you're paying upfront. Most clients see ROI within 2-3 months.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work remotely?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, I work 100% remotely with clients across Australia and New Zealand. I use video calls, screen sharing, and collaborative tools to ensure seamless communication regardless of location.",
          },
        },
        {
          "@type": "Question",
          name: "Can you work with our existing design team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Definitely. In fact, that's the ideal scenario. I work alongside your team to upskill them on AI tools, not replace them. The goal is to make your designers more productive and capable.",
          },
        },
        {
          "@type": "Question",
          name: "What industries do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I've worked with SaaS companies, e-commerce brands, marketing agencies, and startups across various industries. The principles of AI-enhanced design apply broadly, though I tailor the approach to each industry's specific needs.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer ongoing support after the project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All projects include 30 days of post-launch support. I also offer quarterly review packages for clients who want ongoing guidance as AI tools evolve and new opportunities emerge.",
          },
        },
        {
          "@type": "Question",
          name: "Will AI replace our designers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. AI is a tool that enhances human creativity, not replaces it. Your designers will still make the strategic and creative decisions—AI just handles the repetitive, time-consuming tasks so they can focus on higher-value work.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get started?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Book a free 30-minute consultation call. We'll discuss your current challenges, goals, and whether AI design consulting is the right fit for your team. No pressure, no commitment required.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-GEGQY0ME41"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GEGQY0ME41');
        `}
      </Script>
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "ury7erb81j");
        `}
      </Script>
      <body
        className={`${syne.variable} ${spaceGrotesk.variable} antialiased bg-background text-text overflow-x-hidden selection:bg-accent selection:text-black`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
