"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { ShinyButton } from "@/components/ShinyButton";
import { TestimonialsColumn } from "@/components/ui/testimonials-column";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, Paintbrush, LayoutGrid, TrendingUp, Users, Clock } from "lucide-react";

// Testimonials filtered for fractional/ongoing work relevance
const testimonials = [
  {
    text: "Gabriel has been working with us for the better part of two years. We have and continue to be happy with his flexibility in meeting our timeframes, collaboration and excellent result!",
    image: "/testimonials/andrew-barton.avif",
    name: "Andrew Barton",
    role: "Whistle",
  },
  {
    text: "If you're on the hunt for a UX designer who's not only good but also super easy and fast to work with, Gabriel's your man. Really pleased with how everything turned out.",
    image: "/testimonials/michael-doring.avif",
    name: "Michael John Doring",
    role: "Monaco Solicitors",
  },
  {
    text: "I've had the pleasure of working with Gabriel on multiple projects, and the results have always been exceptional. He's creative, prompt, and very easy to work with.",
    image: "/testimonials/mourad.avif",
    name: "Mourad Kessas",
    role: "CTO RewardPay",
  },
  {
    text: "Gabriel consistently brought a strong eye for detail, deep understanding of design systems, and a knack for translating complex requirements into elegant UI solutions.",
    image: "/testimonials/ram-prakash.avif",
    name: "Ram Prakash K",
    role: "CommBank UX Designer",
  },
  {
    text: "You come across as someone with great knowledge of your topic and bring a lot of experience to make things better.",
    image: "/testimonials/yashu.avif",
    name: "Yashu Singh",
    role: "CommBank Product Owner",
  },
  {
    text: "Gabriel is really easy to work with and his output was excellent.",
    image: "/testimonials/mark-dawes.avif",
    name: "Mark Dawes",
    role: "RewardPay",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);

const services = [
  {
    icon: Search,
    title: "UX Audit & Strategy",
    description: "Find what's blocking conversions and get a prioritized roadmap to fix it.",
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description: "Ship features that users actually understand. No more confusion, no more support tickets.",
  },
  {
    icon: LayoutGrid,
    title: "Design Systems",
    description: "Build once, scale forever. Consistent components your dev team will love.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    description: "Turn visitors into users with data-driven UX improvements.",
  },
  {
    icon: Users,
    title: "Team Integration",
    description: "Work seamlessly with your dev team. Async-friendly, timezone-aligned.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Scale up or down as needed. Most engagements are 10-20 hours per week.",
  },
];

const faqItems = [
  {
    id: "faq-1",
    question: "What is a fractional product designer?",
    answer: "A fractional product designer is a senior design professional who works with your company on a part-time basis—typically 10-20 hours per week. You get experienced UX/UI leadership for a fraction of the cost and commitment of a full-time hire.",
  },
  {
    id: "faq-2",
    question: "How is this different from hiring a freelancer?",
    answer: "Freelancers typically work on isolated tasks with clear specifications. Fractional designers operate more like embedded team members—we understand your product strategy, attend team meetings, and think holistically about the user experience.",
  },
  {
    id: "faq-3",
    question: "What does fractional design cost?",
    answer: "Most fractional engagements run $3,000-$12,000/month for 10-20 hours weekly on a monthly retainer. This gives you senior design expertise at a fraction of the $150,000+ annual cost of a full-time hire.",
  },
  {
    id: "faq-4",
    question: "Why choose fractional over an agency?",
    answer: "Agencies are great for large, defined projects but often have long timelines, scope creep, and handoff problems. Fractional gives you an ongoing partner who knows your product deeply, without the overhead.",
  },
  {
    id: "faq-5",
    question: "What if I need more hours some weeks?",
    answer: "Most fractional arrangements have flexibility built in. We can discuss a base retainer with the ability to 'burst' for specific projects or sprints when needed.",
  },
  {
    id: "faq-6",
    question: "Do you work remotely?",
    answer: "Yes, 100% remote with clients across Australia and New Zealand. Being Sydney-based means real-time collaboration during your business hours—no waiting overnight for feedback.",
  },
];

export default function FractionalDesignerSydneyPage() {
  const testimonialsRef = useRef(null);
  const servicesRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      {/* Minimal Header - Logo matching home page */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex flex-col">
            <span className="text-xl font-bold font-display tracking-tighter">
              LUCIDUX<span className="text-accent">.</span>DESIGN
            </span>
            <span className="text-[10px] font-body tracking-widest font-normal text-text-muted uppercase">
              Fractional Product Design
            </span>
          </Link>
          <ShinyButton
            as="a"
            href="https://calendly.com/gabrielhidalgo/30min"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
          >
            Book a Call
          </ShinyButton>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 overflow-hidden pt-20">
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute inset-0 z-0 overflow-hidden bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Primary accent blob - top right */}
          <motion.div
            className="absolute w-[100vw] h-[100vw] md:w-[70vw] md:h-[70vw] rounded-full blur-[100px] md:blur-[120px]"
            style={{
              background: "radial-gradient(circle, rgba(var(--accent-rgb), 0.6) 0%, rgba(var(--accent-rgb), 0) 60%)",
              opacity: 0.6,
            }}
            animate={{
              x: ["10%", "40%", "5%", "35%", "10%"],
              y: ["-40%", "-15%", "-50%", "-20%", "-40%"],
              scale: [1, 1.2, 0.9, 1.15, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Secondary purple blob - bottom left */}
          <motion.div
            className="absolute w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] rounded-full blur-[80px] md:blur-[100px]"
            style={{
              background: "radial-gradient(circle, rgba(var(--secondary-rgb), 0.7) 0%, rgba(var(--secondary-rgb), 0) 60%)",
              opacity: 0.55,
            }}
            animate={{
              x: ["-30%", "0%", "-40%", "-5%", "-30%"],
              y: ["50%", "80%", "40%", "70%", "50%"],
              scale: [1, 0.85, 1.15, 0.9, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Tertiary mixed blob - center */}
          <motion.div
            className="absolute w-[60vw] h-[60vw] md:w-[45vw] md:h-[45vw] rounded-full blur-[60px] md:blur-[80px]"
            style={{
              background: "radial-gradient(circle, rgba(var(--accent-rgb), 0.5) 0%, rgba(var(--secondary-rgb), 0.4) 50%, transparent 70%)",
              opacity: 0.5,
            }}
            animate={{
              x: ["40%", "70%", "30%", "60%", "40%"],
              y: ["10%", "40%", "0%", "30%", "10%"],
              scale: [1, 1.3, 0.8, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <div className="z-10 max-w-7xl mx-auto w-full">
          {/* Availability Status */}
          <motion.div
            className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-10 rounded-full border border-[var(--color-border)] bg-[#111]/50"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            <span className="text-xs uppercase tracking-widest text-text-muted font-mono">
              Available for fractional work
            </span>
          </motion.div>

          <h1 className="text-[10vw] md:text-[5.5vw] leading-[0.9] font-display font-bold tracking-tighter">
            <div className="overflow-hidden">
              <motion.span
                className="block mix-blend-difference text-white"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              >
                FRACTIONAL
              </motion.span>
            </div>
            <div className="overflow-hidden mt-2">
              <motion.span
                className="block text-accent"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
              >
                PRODUCT DESIGN
              </motion.span>
            </div>
            <div className="overflow-hidden mt-2">
              <motion.span
                className="block mix-blend-difference text-white"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
              >
                FOR SYDNEY STARTUPS
              </motion.span>
            </div>
          </h1>

          <motion.div
            className="mt-12 max-w-3xl flex flex-col gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-xl md:text-2xl font-body font-light text-gray-400 leading-relaxed">
              Senior UX/UI expertise without the full-time cost. Flexible hours, deep product focus, real results. Based in Sydney, working with startups across Australia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <ShinyButton
                as="a"
                href="https://calendly.com/gabrielhidalgo/30min"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                Book a Free Call
              </ShinyButton>
              <ShinyButton
                as="a"
                href="/blog/fractional-product-designer-sydney"
                variant="secondary"
                size="lg"
              >
                Learn About Fractional Design
              </ShinyButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - DesignSystems card style */}
      <section ref={servicesRef} className="relative py-16 md:py-32 overflow-hidden">
        {/* Accent-tinted background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(204,255,0,0.03)] via-transparent to-transparent" />

        {/* Subtle top border glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />

        <div className="container mx-auto px-6 md:px-12 relative">
          <motion.div
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16 mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight max-w-2xl">
              What you <span className="text-accent">get</span>
            </h2>
            <p className="text-lg text-gray-400 font-body leading-relaxed max-w-lg">
              Senior design expertise on a flexible basis. Strategic thinking plus hands-on execution, without the full-time commitment.
            </p>
          </motion.div>

          {/* Service Cards Grid - matching DesignSystems style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="relative ring-1 ring-white/10 p-6 md:p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] overflow-hidden rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                  {/* Gradient blur accent */}
                  <div className="absolute -left-10 -top-16 h-48 w-48 bg-gradient-to-tr from-[var(--color-accent)]/15 to-[var(--color-secondary)]/10 rounded-full blur-2xl" />

                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                        <Icon size={20} className="text-[var(--color-accent)]" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-display font-semibold tracking-tight">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-16 md:py-32 bg-[var(--color-background)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />

        <div className="container mx-auto px-6 md:px-12 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              Trusted by teams & <span className="text-accent">founders</span>
            </h2>
          </motion.div>

          <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[600px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={20} />
            <TestimonialsColumn
              testimonials={secondColumn}
              className="hidden md:block"
              duration={24}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-16 md:py-32 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Common <span className="text-accent">questions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Everything you need to know about fractional product design.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-[var(--color-foreground)]/20 overflow-hidden">
              <Accordion type="single" collapsible>
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className={index < faqItems.length - 1 ? "border-b border-dashed border-[var(--color-foreground)]/20" : ""}
                  >
                    <AccordionTrigger className="text-[var(--color-foreground)] text-base md:text-lg font-semibold hover:no-underline px-6 py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 text-base leading-relaxed px-6 pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ShinyButton
                as="a"
                href="/blog/fractional-product-designer-sydney"
                variant="secondary"
                size="lg"
              >
                Read the Full Guide
              </ShinyButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 md:py-32 bg-accent text-black relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter">
            <div className="overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={isCtaInView ? { y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
              >
                Ready to bring senior
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={isCtaInView ? { y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
              >
                design to your team?
              </motion.span>
            </div>
          </h2>
          <motion.p
            className="max-w-2xl mx-auto text-xl font-medium mb-12 text-black/90"
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Book a free 30-minute call. We'll discuss your design needs, whether fractional makes sense for your stage, and how we might work together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isCtaInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <ShinyButton
              as="a"
              href="https://calendly.com/gabrielhidalgo/30min"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
            >
              Book Free Call
            </ShinyButton>
          </motion.div>
        </div>

        {/* Decorative Rotating Circles */}
        <motion.div
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] border border-black/10 rounded-full border-dashed animate-[spin_60s_linear_infinite]"
          initial={{ scale: 0, opacity: 0 }}
          animate={isCtaInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.div
          className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] border border-black/10 rounded-full border-dashed animate-[spin_60s_linear_infinite_reverse]"
          initial={{ scale: 0, opacity: 0 }}
          animate={isCtaInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-background)] py-12 border-t border-[var(--color-foreground)]/10 text-[var(--color-foreground)]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <Link href="/" className="flex flex-col">
                <span className="text-xl font-bold font-display tracking-tighter">
                  LUCIDUX<span className="text-accent">.</span>DESIGN
                </span>
                <span className="text-[10px] font-body tracking-widest font-normal text-text-muted uppercase">
                  Fractional Product Design
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
              <a
                href="https://www.linkedin.com/in/gabrielhidalgow/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-xs text-gray-600 font-mono text-center">
            <p>&copy; 2026 Lucidux. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
