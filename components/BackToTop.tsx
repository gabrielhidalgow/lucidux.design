"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility, { passive: true });
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full border border-[var(--color-foreground)]/20 bg-[var(--color-background)]/80 backdrop-blur-sm flex items-center justify-center text-[var(--color-foreground)]/60 hover:text-accent hover:border-accent transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            }`}
            aria-label="Back to top"
        >
            <ArrowUp className="w-4 h-4" />
        </button>
    );
}
