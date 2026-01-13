"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const values = [
    {
        number: "1",
        title: "User-centered, always",
        description: "Every decision starts with understanding real user needs and behaviors.",
    },
    {
        number: "2",
        title: "Data-informed design",
        description: "Intuition backed by metrics. We measure what matters and iterate.",
    },
    {
        number: "3",
        title: "Ship fast, refine faster",
        description: "Speed to market with quality. Launch, learn, and continuously improve.",
    },
];

export function Team() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-16 md:py-32 bg-background relative">
            <div ref={ref} className="container mx-auto px-6 md:px-12">
                {/* Section Tag */}
                <motion.div
                    className="inline-flex items-center gap-2.5 px-3 py-1.5 mb-8 rounded-sm border border-[var(--color-border)] bg-[#111]/90"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                    </span>
                    <span className="text-xs uppercase tracking-widest text-text-muted font-mono">
                        Meet the team
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Column - Content */}
                    <div>
                        <motion.h2
                            className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.95] mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Design with intention,{" "}
                            <span className="text-accent">deliver with precision</span>.
                        </motion.h2>

                        <div className="space-y-8">
                            {values.map((item, index) => (
                                <motion.div
                                    key={item.number}
                                    className="flex gap-6 group"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                >
                                    <div className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-colors duration-300 text-lg font-mono">
                                        {item.number}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-text-muted leading-relaxed max-w-md">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Profile Image */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <div className="aspect-[4/5] rounded-full bg-surface overflow-hidden relative shadow-2xl">
                            {/* Placeholder gradient background */}
                            <div className="w-full h-full bg-gradient-to-br from-accent/20 via-secondary/20 to-surface" />

                            {/* Overlay Card */}
                            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 bg-[var(--color-background)]/80 backdrop-blur-md border border-[var(--color-border)] p-6 md:p-8 rounded-2xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                                        <span className="text-black font-bold text-lg">G</span>
                                    </div>
                                    <div>
                                        <p className="text-[var(--color-foreground)] font-bold uppercase tracking-wide">
                                            Gabriel Hidalgo
                                        </p>
                                        <p className="text-text-muted text-sm font-mono uppercase tracking-wider">
                                            Product Designer
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
