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
            values: ["48 hours", "Weeks of guessing", "2-4 weeks"],
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
            values: ["Fixed project fee", "Your time", "High retainers"],
        },
    ];

    const renderValue = (value: string, colIndex: number) => {
        if (value === "check") {
            return <Check className={`w-5 h-5 ${colIndex === 0 ? "text-accent" : "text-gray-500"}`} />;
        }
        if (value === "x") {
            return <X className="w-5 h-5 text-gray-600" />;
        }
        return <span className={colIndex === 0 ? "text-white" : "text-gray-400"}>{value}</span>;
    };

    return (
        <section className="py-16 md:py-32 bg-black">
            <div className="container mx-auto px-6 md:px-12" ref={ref}>
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                        How it <span className="text-accent">compares</span>
                    </h2>
                </motion.div>

                <motion.div
                    className="overflow-x-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <table className="w-full min-w-[640px]">
                        <thead>
                            <tr className="border-b-2 border-accent">
                                <th className="py-4 pr-4 text-left"></th>
                                {columns.map((col, index) => (
                                    <th
                                        key={col}
                                        className={`py-4 px-4 text-left font-display text-lg md:text-xl font-bold ${
                                            index === 0 ? "text-accent" : "text-white"
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
                                    className="border-b border-white/10 hover:bg-surface transition-colors duration-300"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + rowIndex * 0.1 }}
                                >
                                    <td className="py-5 pr-4 text-gray-400 font-body">
                                        {row.feature}
                                    </td>
                                    {row.values.map((value, colIndex) => (
                                        <td
                                            key={`${row.feature}-${colIndex}`}
                                            className={`py-5 px-4 font-body ${
                                                colIndex === 0 ? "bg-accent/5" : ""
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
