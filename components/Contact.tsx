"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="py-32 bg-accent text-black relative overflow-hidden">
            <div ref={ref} className="container mx-auto px-6 md:px-12 text-center relative z-10">
                <div className="overflow-hidden">
                    <motion.h2
                        className="text-6xl md:text-9xl font-display font-bold mb-8 tracking-tighter"
                        initial={{ y: "100%" }}
                        animate={isInView ? { y: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                    >
                        START THE
                    </motion.h2>
                </div>
                <div className="overflow-hidden">
                    <motion.h2
                        className="text-6xl md:text-9xl font-display font-bold mb-8 tracking-tighter"
                        initial={{ y: "100%" }}
                        animate={isInView ? { y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                    >
                        REVOLUTION
                    </motion.h2>
                </div>
                <motion.p
                    className="max-w-2xl mx-auto text-xl font-medium mb-12 opacity-80"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 0.8, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Ready to leave the traditional world behind? Let's build something that defies explanation.
                </motion.p>
                <motion.a
                    href="https://calendly.com/gabrielhidalgo/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-black text-white px-10 py-5 rounded-full font-bold text-lg uppercase tracking-widest hover:scale-105 transition-transform duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    Initialize Project
                </motion.a>
            </div>

            {/* Decorative Rotating Circles */}
            <motion.div
                className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] border border-black/10 rounded-full border-dashed animate-[spin_60s_linear_infinite]"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.div
                className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] border border-black/10 rounded-full border-dashed animate-[spin_60s_linear_infinite_reverse]"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
            />
        </section>
    );
}
