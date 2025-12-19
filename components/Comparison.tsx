"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Check, X } from "lucide-react";

export function Comparison() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const columns = ["AI Design Consulting", "DIY AI Tools", "Traditional Agency"];

    const rows = [
        {
            feature: "Setup time",
            values: ["2-4 weeks", "Months of trial/error", "N/A"],
        },
        {
            feature: "Custom to your workflow",
            values: ["check", "x", "Partial"],
        },
        {
            feature: "Ongoing support",
            values: ["check", "x", "$$$$ retainer"],
        },
        {
            feature: "Team training",
            values: ["check", "Self-taught", "Limited"],
        },
        {
            feature: "Cost",
            values: ["Fixed project fee", "Subscriptions add up", "High hourly rates"],
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
        <section className="py-32 bg-black">
            <div className="container mx-auto px-6 md:px-12" ref={ref}>
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                        How It <span className="text-accent">Compares</span>
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
