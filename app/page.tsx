import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Expertise } from "@/components/Expertise";
import { Comparison } from "@/components/Comparison";
import { Audience } from "@/components/Audience";
import { Work } from "@/components/Work";
import { Philosophy } from "@/components/Philosophy";
import { Testimonials } from "@/components/Testimonials";
import { FAQs } from "@/components/FAQs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-text selection:bg-accent selection:text-black overflow-x-hidden">
      <div className="grain-overlay"></div>

      <CustomCursor />

      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="ticker">
        <Ticker text="INTELLIGENCE • DESIGN • SYNTHESIS • FUTURE •" />
      </div>
      <div id="services">
        <Expertise />
      </div>
      <Comparison />
      <Ticker text="CREATING • BEYOND • HUMAN • LIMITS •" />
      <Audience />
      <div id="work">
        <Work />
      </div>
      <div id="about">
        <Philosophy />
      </div>
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  );
}
