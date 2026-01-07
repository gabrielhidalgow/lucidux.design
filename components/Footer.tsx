"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <footer className="bg-black py-16 border-t border-white/10 text-white">
            <div ref={ref} className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <motion.div
                        className="md:col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-display font-bold mb-6">LUCIDUX.DESIGN</h3>
                        <p className="text-gray-500 max-w-sm">
                            UX/UI DESIGN FOR AI-BUILT STARTUPS
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                            Based in Sydney. Working with businesses across Australia.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="font-bold mb-6 tracking-widest text-sm">Sitemap</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            {[
                                { label: "Home", href: "#home" },
                                { label: "Work", href: "#work" },
                                { label: "How it works", href: "#services" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} className="hover:text-accent transition-colors">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="font-bold mb-6 tracking-widest text-sm">Social</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li>
                                <a href="https://x.com/ghidalgodesign" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">X</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/gabrielhidalgow/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-600 font-mono"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <p>&copy; 2026 Lucidux. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
}
