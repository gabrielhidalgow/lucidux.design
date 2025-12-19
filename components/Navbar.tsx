"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
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
            className={`fixed top-0 left-0 right-0 z-40 px-6 py-6 md:px-12 flex justify-between items-center text-white transition-all duration-300 ${
                isScrolled
                    ? "bg-background/80 backdrop-blur-md"
                    : "mix-blend-difference"
            }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        >
            <motion.div
                className="text-2xl font-bold font-display tracking-tighter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                AI<span className="text-accent">.</span>GENCY
            </motion.div>

            <div className="hidden md:flex gap-8 font-body text-sm uppercase tracking-widest">
                {["Work", "Expertise", "Philosophy", "Contact"].map((item, index) => (
                    <motion.div
                        key={item}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                        <Link
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-accent transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="md:hidden z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <Menu className="w-6 h-6" />
            </motion.div>
        </motion.nav>
    );
}
