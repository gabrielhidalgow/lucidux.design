"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Check, X, ArrowLeftRight } from "lucide-react";
import { ShinyButton } from "./ShinyButton";

export function Comparison() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const columns = ["LUCIDUX", "DIY Fixes", "Traditional Agency"];

    const rows = [
        {
            feature: "Time to insights",
            values: ["Days", "Weeks of guessing", "2-4 weeks"],
        },
        {
            feature: "Native to AI-built products",
            values: ["check", "check", "Rarely"],
        },
        {
            feature: "Works with your stack",
            values: ["v0, Cursor, Bolt, Replit, Lovable, etc.", "Your tools", "Generic process"],
        },
        {
            feature: "Actionable recommendations",
            values: ["Prioritized roadmap", "Trial & error", "PDF reports"],
        },
        {
            feature: "Pricing",
            values: ["Flexible (fixed/hourly)", "Your time", "High retainers"],
        },
    ];

    const renderValue = (value: string, colIndex: number) => {
        if (value === "check") {
            return <Check className={`w-5 h-5 ${colIndex === 0 ? "text-accent" : "text-gray-500"}`} />;
        }
        if (value === "x") {
            return <X className="w-5 h-5 text-gray-600" />;
        }
        return <span className={colIndex === 0 ? "text-[var(--color-foreground)]" : "text-gray-400"}>{value}</span>;
    };

    return (
        <section className="py-16 md:py-32 bg-[var(--color-background)]">
            <div className="container mx-auto px-4 md:px-12" ref={ref}>
                {/* Module Container */}
                <motion.div
                    className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-8 md:p-12 lg:p-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {/* Header */}
                    <div className="mb-12 md:mb-16">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                            The <span className="text-accent">smarter</span> choice
                        </h2>
                    </div>

                    {/* Inner Card with Table */}
                    <motion.div
                        className="rounded-2xl border border-white/10 bg-surface/50 overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Scroll Hint - Mobile/Tablet */}
                        <div className="lg:hidden flex items-center justify-center gap-2 mb-4 pt-2 text-sm text-gray-400 font-mono">
                            <ArrowLeftRight className="w-4 h-4" />
                            <span>Swipe to compare</span>
                        </div>

                        <div className="relative">
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[640px] border-separate border-spacing-0">
                                    <thead>
                                        <tr>
                                            <th className="py-6 px-6 text-left border-b border-white/10"></th>
                                            {columns.map((col, index) => (
                                                <th
                                                    key={col}
                                                    className={`py-6 px-6 text-left font-display text-lg md:text-xl font-bold ${index === 0
                                                        ? "text-accent grad-col-top"
                                                        : "text-[var(--color-foreground)] border-b border-white/10"
                                                        }`}
                                                >
                                                    {col}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rows.map((row, rowIndex) => (
                                            <motion.tr
                                                key={row.feature}
                                                className="hover:bg-white/[0.02] transition-colors duration-300"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                                transition={{ duration: 0.4, delay: 0.3 + rowIndex * 0.1 }}
                                            >
                                                <td className={`py-6 px-6 text-gray-400 font-body ${rowIndex !== rows.length - 1 ? "border-b border-white/10" : ""}`}>
                                                    {row.feature}
                                                </td>
                                                {row.values.map((value, colIndex) => (
                                                    <td
                                                        key={`${row.feature}-${colIndex}`}
                                                        className={`py-6 px-6 font-body ${colIndex === 0
                                                            ? `${rowIndex === rows.length - 1
                                                                ? "grad-col-bot"
                                                                : "grad-col-mid"
                                                            }`
                                                            : ""
                                                            } ${rowIndex !== rows.length - 1 ? "border-b border-white/10" : ""}`}
                                                    >
                                                        {renderValue(value, colIndex)}
                                                    </td>
                                                ))}
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* Gradient Fade for scroll indication */}
                            <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-black/40 to-transparent pointer-events-none lg:hidden" />
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        className="mt-12 md:mt-16 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <ShinyButton
                            as="a"
                            href="https://calendly.com/gabrielhidalgo/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="secondary"
                            size="lg"
                        >
                            Start with a free UX audit
                        </ShinyButton>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
