import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedTestimonial } from "@/components/FeaturedTestimonial";
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
      <FeaturedTestimonial />
      <div id="ticker">
        <Ticker text="CONVERT • CLARITY • SPEED • SCALE •" />
      </div>
      <div id="services">
        <Expertise />
      </div>
      <Comparison />
      <Ticker text="SHIP • FIX • PROVE • GROW •" />
      <Audience />
      <div id="work">
        <Work />
      </div>
      <div id="about">
        <Philosophy />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <FAQs />
      <Contact />
      <Footer />
    </div>
  );
}
