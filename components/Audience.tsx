"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const audiences = [
    "Technical founders who shipped with AI coding tools",
    "AI startups with a working product but lagging conversions",
    "Small teams (1-3 people) who need design expertise without a full-time hire",
    "Companies adding AI features (chat, ML, LLM) to existing products",
];

export function Audience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-16 md:py-32 bg-black">
            <div className="container mx-auto px-6 md:px-12 mb-16" ref={ref}>
                <motion.h2
                    className="text-5xl md:text-6xl lg:text-7xl font-display font-bold"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Who this is <span className="text-accent">for</span>
                </motion.h2>
            </div>

            <div className="flex flex-col">
                {audiences.map((item, index) => (
                    <motion.div
                        key={index}
                        className="group border-t border-white/10 py-8 md:py-10 hover:bg-surface transition-colors duration-500"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="container mx-auto px-6 md:px-12 flex items-center gap-6 md:gap-12">
                            <span className="text-accent font-mono text-sm">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <p className="text-xl md:text-2xl lg:text-3xl font-body text-gray-400 group-hover:text-white transition-colors duration-300">
                                {item}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
