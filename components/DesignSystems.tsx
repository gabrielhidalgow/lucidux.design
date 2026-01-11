"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ShinyButton } from "./ShinyButton";
import { LayoutGrid, Palette, Atom, Users, Brain, FileText } from "lucide-react";

const services = [
  {
    icon: LayoutGrid,
    title: "Component audit",
    description:
      "Evaluate existing components to identify gaps and inconsistencies, ensuring a comprehensive and cohesive system.",
  },
  {
    icon: Palette,
    title: "Design tokens",
    description:
      "Define and structure your design tokens (colors, typography, spacing) for consistent implementation across platforms.",
  },
  {
    icon: Atom,
    title: "Atomic design",
    description:
      "Create fundamental design elements that serve as building blocks for complex components, promoting consistency and scalability.",
  },
  {
    icon: Users,
    title: "User research",
    description:
      "Incorporate user research findings into your design system to ensure components meet real user needs.",
  },
  {
    icon: Brain,
    title: "AI product design",
    description:
      "Specialized design patterns for AI interfaces—chat, ML features, LLM interactions—built into your system.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description:
      "Develop detailed documentation to guide component use, ensuring uniformity and ease of use across teams.",
  },
];

export function DesignSystems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      {/* Accent-tinted background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(204,255,0,0.03)] via-transparent to-transparent" />

      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 relative" ref={ref}>
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16 mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight max-w-2xl">
            Scale with <span className="text-accent">design systems</span>
          </h2>
          <p className="text-lg text-gray-400 font-body leading-relaxed max-w-lg">
            Design systems are essential for modern product development. We transform your visual assets into reusable, documented components that enable your team to deliver ideas swiftly and cohesively.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="relative ring-1 ring-white/10 p-6 md:p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
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

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ShinyButton
            as="a"
            href="https://calendly.com/gabrielhidalgo/30min"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
          >
            Start with a Free UX Audit
          </ShinyButton>
        </motion.div>
      </div>
    </section>
  );
}
