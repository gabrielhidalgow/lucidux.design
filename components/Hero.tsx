"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col justify-center px-6 md:px-12 overflow-hidden">
            {/* Background Blobs - Animated */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-accent/10 rounded-full blur-[120px]"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <motion.div
                    className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-secondary/10 rounded-full blur-[100px]"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                />
            </div>

            <div className="z-10 max-w-7xl mx-auto w-full">
                <div className="overflow-hidden">
                    <motion.h1
                        className="text-[11vw] md:text-[10vw] leading-[0.85] font-display font-bold tracking-tighter mix-blend-difference"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    >
                        <span className="text-white/10 hover:text-accent transition-colors duration-500 cursor-none">
                            AI DESIGN
                        </span>
                    </motion.h1>
                </div>
                <div className="overflow-hidden">
                    <motion.h1
                        className="text-[11vw] md:text-[10vw] leading-[0.85] font-display font-bold tracking-tighter mix-blend-difference text-white"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                    >
                        CONSULTING
                    </motion.h1>
                </div>

                <motion.div
                    className="mt-12 max-w-5xl flex flex-col gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <p className="text-xl md:text-2xl font-body font-light text-gray-400 leading-relaxed">
                        Transform your design workflow with AI.<br />
                        I help small and mid-size businesses in Australia and New Zealand implement the right AI tools, build efficient design systems, and automate repetitive processes.
                    </p>

                    <motion.div
                        className="flex items-center gap-4 group cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        onClick={() => {
                            document.getElementById("ticker")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all duration-300">
                            <ArrowDown className="w-5 h-5" />
                        </div>
                        <span className="uppercase tracking-widest text-sm font-bold">Explore Our Vision</span>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-12 right-6 md:right-12 flex flex-col items-end gap-2 font-mono text-xs text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <span>SCROLL TO EXPLORE</span>
                <div className="h-16 w-[1px] bg-gray-700 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-scrolldown"></div>
                </div>
            </motion.div>
        </section>
    );
}
