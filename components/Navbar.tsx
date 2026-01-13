"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ShinyButton } from "./ShinyButton";

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
        <>
            {/* Skip to main content link for keyboard users */}
            <a
                href="#services"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-accent focus:text-black focus:rounded-md focus:font-bold focus:outline-none"
            >
                Skip to main content
            </a>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center text-[var(--color-foreground)] transition-all duration-300 ${isScrolled
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
                    <span className="text-xs font-body tracking-widest font-normal text-text-muted">UX/UI DESIGN FOR AI-BUILT STARTUPS</span>
                </Link>
            </motion.div>

            <motion.div
                className="flex items-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <a
                    href="#services"
                    className="hidden md:block text-sm font-body text-gray-400 hover:text-[var(--color-foreground)] transition-colors uppercase tracking-wider"
                >
                    Better UX
                </a>
                <a
                    href="#work"
                    className="hidden md:block text-sm font-body text-gray-400 hover:text-[var(--color-foreground)] transition-colors uppercase tracking-wider"
                >
                    Work
                </a>
                <a
                    href="#testimonials"
                    className="hidden md:block text-sm font-body text-gray-400 hover:text-[var(--color-foreground)] transition-colors uppercase tracking-wider"
                >
                    Testimonials
                </a>
                <ShinyButton
                    as="a"
                    href="https://calendly.com/gabrielhidalgo/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                >
                    <span className="hidden md:inline">FREE LUCID UX AUDIT</span>
                    <span className="md:hidden">FREE AUDIT</span>
                </ShinyButton>
            </motion.div>
        </motion.nav>
        </>
    );
}
