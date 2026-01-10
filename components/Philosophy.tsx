"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

// Hook to check if component is mounted (client-side)
function useHasMounted() {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    return hasMounted;
}

// Animated counter component
function AnimatedCounter({ value, inView }: { value: number; inView: boolean }) {
    const [count, setCount] = useState(0);
    const hasMounted = useHasMounted();

    useEffect(() => {
        if (!inView || !hasMounted) return;

        let start = 0;
        const duration = 1500;
        const increment = value / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [inView, value, hasMounted]);

    // Show static value on server, animated on client
    if (!hasMounted) return <span>{value}%</span>;
    return <span>{count}%</span>;
}

// Typing animation component
function TypingText({ text, delay, inView }: { text: string; delay: number; inView: boolean }) {
    const [displayedText, setDisplayedText] = useState(text);
    const [showCursor, setShowCursor] = useState(false);
    const hasMounted = useHasMounted();
    const hasStarted = useRef(false);

    useEffect(() => {
        if (!inView || !hasMounted || hasStarted.current) return;
        hasStarted.current = true;

        // Reset to empty and start typing
        setDisplayedText("");

        const startDelay = setTimeout(() => {
            let index = 0;
            const typingInterval = setInterval(() => {
                if (index < text.length) {
                    setDisplayedText(text.slice(0, index + 1));
                    index++;
                } else {
                    clearInterval(typingInterval);
                    setShowCursor(true);
                }
            }, 50);

            return () => clearInterval(typingInterval);
        }, delay);

        return () => clearTimeout(startDelay);
    }, [inView, text, delay, hasMounted]);

    // Show full text on server, animated on client
    if (!hasMounted) return <span>{text}</span>;

    return (
        <span>
            {displayedText}
            <span className={`${showCursor ? "animate-pulse" : "opacity-0"}`}>_</span>
        </span>
    );
}

const metrics = [
    { label: "CREATIVITY", value: 100 },
    { label: "SPEED", value: 100 },
    { label: "PRECISION", value: 100 },
];

const terminalLines = [
    { text: "> analyzing design request...", delay: 0 },
    { text: "> generating parameters...", delay: 1200 },
    { text: "> outputting masterpiece", delay: 2400 },
];

export function Philosophy() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="philosophy" className="py-16 md:py-32 bg-[var(--color-background)] relative">
            {/* Background Grid Pattern */}
            <div
                className="absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"
                style={{ backgroundImage: "linear-gradient(to right, var(--color-surface-alt) 1px, transparent 1px), linear-gradient(to bottom, var(--color-surface-alt) 1px, transparent 1px)" }}
            ></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-12">
                            Why AI-built interfaces need <span className="text-accent">expert eyes</span>
                        </h2>

                        <div className="space-y-8 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                            <p>
                                AI tools ship polished UIs fast. But polished ≠ effective.
                            </p>
                            <p>
                                I've reviewed 15+ AI-generated interfaces. The same problems appear in 80%: equal visual weight everywhere, cognitive overload, unclear affordances, generic patterns that don't fit the use case.
                            </p>
                            <p>
                                Expert judgment and usability testing with real customers spot these instantly. Data validates they matter.
                            </p>
                        </div>

                        <div className="mt-16">
                            <h3 className="sr-only">Key Statistics</h3>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-3xl font-display font-bold text-[var(--color-foreground)] mb-2">15+</h4>
                                    <p className="text-sm font-mono text-gray-500">INTERFACES REVIEWED</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-display font-bold text-[var(--color-foreground)] mb-2">80%</h4>
                                    <p className="text-sm font-mono text-gray-500">SHARE SAME ISSUES</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative" ref={ref}>
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 blur-[100px] rounded-full opacity-50"></div>

                        <motion.div
                            className="relative h-full min-h-[500px] border border-[var(--color-foreground)]/10 bg-[var(--color-background)]/50 backdrop-blur-sm p-8 flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Metrics Section - Larger bars */}
                            <div className="flex-1 flex flex-col justify-center space-y-8">
                                {metrics.map((metric, index) => (
                                    <motion.div
                                        key={metric.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                                        className="group"
                                    >
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="font-mono text-sm text-accent tracking-wider">
                                                {metric.label}
                                            </span>
                                            <span className="font-mono text-2xl font-bold text-[var(--color-foreground)]">
                                                <AnimatedCounter value={metric.value} inView={isInView} />
                                            </span>
                                        </div>
                                        <div className="h-3 bg-gray-800/80 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full group-hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.4)] transition-shadow duration-300"
                                                initial={{ width: 0 }}
                                                animate={isInView ? { width: `${metric.value}%` } : {}}
                                                transition={{ duration: 1.2, delay: 0.5 + index * 0.15, ease: "easeOut" }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Terminal Section */}
                            <motion.div
                                className="mt-8 p-4 border border-[var(--color-foreground)]/10 bg-[var(--color-background)]/80 rounded"
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 1 }}
                            >
                                {terminalLines.map((line, index) => (
                                    <p
                                        key={index}
                                        className={`font-mono text-sm ${index === terminalLines.length - 1 ? 'text-[var(--color-foreground)]' : 'text-gray-400'} ${index < terminalLines.length - 1 ? 'mb-2' : ''}`}
                                    >
                                        <TypingText text={line.text} delay={line.delay + 1000} inView={isInView} />
                                    </p>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
