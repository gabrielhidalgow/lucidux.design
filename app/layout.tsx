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
  description: "Sydney-based UX/UI consultant for technical founders. I fix usability issues, optimize conversion, and build design systems for products built with Cursor, v0, Lovable, Bolt, Replit, and Claude Code.",
  keywords: ["UX designer", "UI designer", "startup design", "AI products", "UX audit", "design systems", "Cursor", "v0", "Lovable", "Bolt", "Replit", "Claude Code", "conversion optimization", "Sydney UX designer", "Sydney UI designer", "UX consultant Sydney", "Australian design consultant", "Sydney startup design"],
  authors: [{ name: "Gabriel Hidalgo" }],
  creator: "Gabriel Hidalgo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lucidux.design",
    siteName: "Lucidux Design",
    title: "LUCIDUX — UX/UI Design for AI-Built Startups",
    description: "Sydney-based UX/UI consultant for technical founders. I fix usability issues, optimize conversion, and build design systems for products built with Cursor, v0, Lovable, Bolt, Replit, and Claude Code.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUCIDUX — UX/UI Design for AI-Built Startups",
    description: "Sydney-based UX/UI consultant for technical founders. I fix usability issues, optimize conversion, and build design systems.",
    creator: "@gabrielhidalgo",
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
  "@type": "ProfessionalService",
  name: "Lucidux Design",
  description: "Sydney-based UX/UI consultant for technical founders building AI products. Specializing in user journey optimization, usability improvements, and scalable design systems.",
  url: "https://lucidux.design",
  founder: {
    "@type": "Person",
    name: "Gabriel Hidalgo",
    jobTitle: "UX/UI Design Consultant",
  },
  serviceType: ["UX Design", "UI Design", "UX Audit", "Design Systems", "Conversion Optimization"],
  areaServed: [
    { "@type": "City", name: "Sydney" },
    { "@type": "State", name: "New South Wales" },
    { "@type": "Country", name: "Australia" }
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    addressCountry: "AU"
  },
  priceRange: "$$",
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
