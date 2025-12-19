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
                        <h3 className="text-2xl font-display font-bold mb-6">LUCID.DESIGN</h3>
                        <p className="text-gray-500 max-w-sm">
                            An AI-native design studio crafting the visual language of the post-human era.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Sitemap</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            {["Home", "Work", "Services", "About"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-accent transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Social</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            {["Instagram", "Twitter / X", "LinkedIn", "GitHub"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-accent transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-600 font-mono"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <p>&copy; 2024 LUCID. ALL RIGHTS RESERVED.</p>
                    <p>DESIGNED BY AI. CURATED BY HUMANS.</p>
                </motion.div>
            </div>
        </footer>
    );
}
