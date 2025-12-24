"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center text-white transition-all duration-300 ${isScrolled
                    ? "bg-background/80 backdrop-blur-md"
                    : "mix-blend-difference"
                }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        >
            <motion.div
                className="text-2xl font-bold font-display tracking-tighter z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <Link href="/" className="flex flex-col">
                    <span>LUCIDUX<span className="text-accent">.</span>DESIGN</span>
                    <span className="text-xs font-body tracking-widest font-normal" style={{ color: 'lab(65.9269 -0.832707 -8.17473)' }}>CLEAR UX/UI THINKING FOR AI PRODUCTS</span>
                </Link>
            </motion.div>

            <motion.a
                href="https://calendly.com/gabrielhidalgo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-black font-bold font-body text-xs px-3 py-2 md:text-sm md:px-6 md:py-3 rounded-full hover:bg-accent/90 transition-colors uppercase tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <span className="hidden md:inline">FREE LUCID UX AUDIT</span><span className="md:hidden">FREE UX AUDIT</span>
            </motion.a>
        </motion.nav>
    );
}
