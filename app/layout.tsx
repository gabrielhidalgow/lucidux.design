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
  title: "LUCIDUX — Fractional UX & Product Design Studio Sydney",
  description: "Fractional UX designer for AI startups. We help founders fix conversion and usability fast. UX audits, product design for mobile apps, web apps & SaaS. Cursor, v0, Bolt.",
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
    // Developer/builder identity (missing design expertise)
    "developer needs designer", "technical founder design help", "make my app look more professional",
    "my app works but looks bad", "polish my MVP", "MVP design polish",
    "ship fast need design help", "builder not designer", "can code can't design",
    // Core services
    "UX designer", "UI designer", "startup design", "UX audit", "design systems",
    "product design help", "UX design partner", "design partner for startups",
    "startup UX consultant", "MVP design", "conversion optimization",
    // Fractional design (high-growth keyword)
    "fractional UX designer", "fractional product designer", "fractional design partner",
    "fractional UI designer", "hire fractional designer", "fractional UX designer for startups",
    "fractional design team", "fractional UX Sydney", "fractional product designer Australia",
    "part-time UX designer", "on-demand UX designer", "embedded design partner",
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
    title: "LUCIDUX — Fractional UX & Product Design Studio Sydney",
    description: "Fractional UX designer for AI startups. We help founders fix conversion and usability fast. UX audits, product design for mobile apps, web apps & SaaS. Cursor, v0, Bolt.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LUCIDUX — Fractional UX & Product Design Studio Sydney",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LUCIDUX — Fractional UX & Product Design Studio Sydney",
    description: "Fractional UX designer for AI startups. We fix conversion and usability fast. UX audits & product design for Cursor, v0, Bolt apps.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
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
