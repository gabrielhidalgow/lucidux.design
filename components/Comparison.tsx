"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Check, X } from "lucide-react";

export function Comparison() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const columns = ["Expert UX Review", "DIY Fixes", "Traditional Agency"];

    const rows = [
        {
            feature: "Time to insights",
            values: ["Instant (Free UX Audit)", "Weeks of guessing", "2-4 weeks"],
        },
        {
            feature: "Issues identified",
            values: ["10-15 specific", "Maybe 2-3 obvious", "Varies"],
        },
        {
            feature: "Data-backed",
            values: ["check", "x", "Sometimes"],
        },
        {
            feature: "Understands AI tools",
            values: ["check", "check", "Rarely"],
        },
        {
            feature: "Cost",
            values: ["Fixed project OR Hourly rate fees", "Your time", "High retainers"],
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
            <div className="container mx-auto px-6 md:px-12" ref={ref}>
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                        The <span className="text-accent">smarter</span> choice
                    </h2>
                </motion.div>

                <motion.div
                    className="overflow-x-auto p-4" // Added padding to prevent border clipping
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <table className="w-full min-w-[640px] border-separate border-spacing-0">
                        <thead>
                            <tr>
                                <th className="py-4 pr-4 text-left border-b border-accent"></th>
                                {columns.map((col, index) => (
                                    <th
                                        key={col}
                                        className={`py-4 px-4 text-left font-display text-lg md:text-xl font-bold ${index === 0
                                            ? "text-accent border-t border-x border-accent rounded-t-2xl bg-accent/5"
                                            : "text-[var(--color-foreground)] border-b border-accent"
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
                                    className="hover:bg-surface transition-colors duration-300"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + rowIndex * 0.1 }}
                                >
                                    <td className="py-5 pr-4 text-gray-400 font-body border-b border-white/10">
                                        {row.feature}
                                    </td>
                                    {row.values.map((value, colIndex) => (
                                        <td
                                            key={`${row.feature}-${colIndex}`}
                                            className={`py-5 px-4 font-body ${colIndex === 0
                                                ? `border-x border-accent bg-accent/5 ${rowIndex === rows.length - 1
                                                    ? "border-b rounded-b-2xl"
                                                    : "border-b border-white/10"
                                                }`
                                                : "border-b border-white/10"
                                                }`}
                                        >
                                            {renderValue(value, colIndex)}
                                        </td>
                                    ))}
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    );
}
