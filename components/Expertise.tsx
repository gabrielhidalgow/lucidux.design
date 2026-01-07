"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const iconMap: Record<string, string> = {
  "01": "/icons/icon-eye.png",
  "02": "/icons/icon-chess.png",
  "03": "/icons/icon-data.png",
  "04": "/icons/icon-support.png",
};

export function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const processSteps = [
        {
            id: "01",
            title: "Expert eye",
            subtitle: "Spot what AI tools miss",
            description: "I review your interface and spot 5-7 critical issues in minutes. Visual hierarchy, cognitive load, interaction gaps—problems AI tools consistently miss.",
        },
        {
            id: "02",
            title: "Strategy",
            subtitle: "Prioritize what to fix first",
            description: "Based on the audit, I create a prioritized design roadmap. What's costing you conversions now vs. what can wait. Clear recommendations with expected impact.",
        },
        {
            id: "03",
            title: "Data Validation",
            subtitle: "Prove what matters most",
            description: "Analytics review and usability testing confirm which fixes matter most. No guesswork—just evidence.",
        },
        {
            id: "04",
            title: "Support",
            subtitle: "Ongoing design partnership",
            description: "Weekly strategic consultation, async feedback, design review before development. Expert eyes on every change without a full-time hire.",
        },
    ];

    return (
        <section id="expertise" className="py-16 md:py-32 bg-black">
            <div className="container mx-auto px-6 md:px-12 mb-24" ref={ref}>
                <motion.div
                    className="flex flex-col md:flex-row md:items-end lg:items-end justify-between gap-8 lg:gap-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                        How it <span className="text-accent">works</span>
                    </h2>
                </motion.div>
            </div>

            <div className="flex flex-col">
                {processSteps.map((item, index) => {
                    const iconSrc = iconMap[item.id];

                    return (
                        <motion.div
                            key={item.id}
                            className="relative border-t border-white/10 py-12 md:py-14 lg:py-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                                <div className="md:col-span-2 flex items-center justify-start">
                                    {iconSrc && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.85, y: 15 }}
                                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.6,
                                                ease: [0.25, 0.1, 0.25, 1],
                                                delay: index * 0.1 + 0.2
                                            }}
                                        >
                                            <Image
                                                src={iconSrc}
                                                alt={item.title}
                                                width={80}
                                                height={80}
                                                className="object-contain"
                                            />
                                        </motion.div>
                                    )}
                                </div>

                                <div className="md:col-span-4">
                                    <h3 className="text-4xl md:text-4xl lg:text-5xl font-display font-bold mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-base">
                                        {item.subtitle}
                                    </p>
                                </div>

                                <div className="md:col-span-6">
                                    <p className="text-lg text-gray-400 font-body leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
