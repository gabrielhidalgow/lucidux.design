"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
    return (
        <section className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 overflow-hidden">
            {/* Animated Gradient Background */}
            <motion.div
                className="absolute inset-0 z-0 overflow-hidden bg-background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                {/* Primary accent blob - top right */}
                <motion.div
                    className="absolute w-[100vw] h-[100vw] md:w-[70vw] md:h-[70vw] rounded-full blur-[100px] md:blur-[120px]"
                    style={{
                        background: "radial-gradient(circle, rgba(var(--accent-rgb), 0.6) 0%, rgba(var(--accent-rgb), 0) 60%)",
                        opacity: 0.6,
                    }}
                    animate={{
                        x: ["10%", "40%", "5%", "35%", "10%"],
                        y: ["-40%", "-15%", "-50%", "-20%", "-40%"],
                        scale: [1, 1.2, 0.9, 1.15, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Secondary purple blob - bottom left */}
                <motion.div
                    className="absolute w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] rounded-full blur-[80px] md:blur-[100px]"
                    style={{
                        background: "radial-gradient(circle, rgba(var(--secondary-rgb), 0.7) 0%, rgba(var(--secondary-rgb), 0) 60%)",
                        opacity: 0.55,
                    }}
                    animate={{
                        x: ["-30%", "0%", "-40%", "-5%", "-30%"],
                        y: ["50%", "80%", "40%", "70%", "50%"],
                        scale: [1, 0.85, 1.15, 0.9, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Tertiary mixed blob - center */}
                <motion.div
                    className="absolute w-[60vw] h-[60vw] md:w-[45vw] md:h-[45vw] rounded-full blur-[60px] md:blur-[80px]"
                    style={{
                        background: "radial-gradient(circle, rgba(var(--accent-rgb), 0.5) 0%, rgba(var(--secondary-rgb), 0.4) 50%, transparent 70%)",
                        opacity: 0.5,
                    }}
                    animate={{
                        x: ["40%", "70%", "30%", "60%", "40%"],
                        y: ["10%", "40%", "0%", "30%", "10%"],
                        scale: [1, 1.3, 0.8, 1.2, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Blue/teal accent - top area */}
                <motion.div
                    className="absolute w-[120vw] h-[50vh] rounded-full blur-[100px]"
                    style={{
                        background: "linear-gradient(180deg, rgba(var(--cyan-rgb), 0.5) 0%, transparent 100%)",
                        opacity: 0.4,
                    }}
                    animate={{
                        x: ["-20%", "10%", "-30%", "5%", "-20%"],
                        y: ["-30%", "-10%", "-40%", "-15%", "-30%"],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>

            <div className="z-10 max-w-7xl mx-auto w-full">
                {/* Availability Status */}
                <motion.div
                    className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-10 rounded-full border border-[var(--color-border)] bg-[#111]/50"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                    </span>
                    <span className="text-xs uppercase tracking-widest text-text-muted font-mono">
                        Available for projects
                    </span>
                </motion.div>

                <div className="overflow-hidden">
                    <motion.h1
                        className="text-[11vw] md:text-[6.5vw] leading-[0.85] font-display font-bold tracking-tighter mix-blend-difference text-white"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    >
                        SHIPPED FAST.
                    </motion.h1>
                </div>
                <div className="overflow-hidden mt-2">
                    <motion.h1
                        className="text-[11vw] md:text-[6.5vw] leading-[0.85] font-display font-bold tracking-tighter text-accent"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                    >
                        TIME TO CONVERT.
                    </motion.h1>
                </div>

                <motion.div
                    className="mt-16 max-w-5xl flex flex-col gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <p className="text-xl md:text-2xl font-body font-light text-gray-400 leading-relaxed">
                        UX/UI Design Consultant for AI-Built Products (Mobile Apps, Websites & Web Apps). I streamline user journeys, fix usability gaps, and build design systems that scale.
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
                        <span className="uppercase tracking-widest text-sm font-bold">See Your Path to Better UX</span>
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
