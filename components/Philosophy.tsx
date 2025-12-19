"use client";

import { Hexagon } from "lucide-react";
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
    { label: "CREATIVITY", value: 98 },
    { label: "SPEED", value: 100 },
    { label: "PRECISION", value: 85 },
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
        <section id="philosophy" className="py-32 bg-black relative">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-12">
                            WE DON'T JUST DESIGN. <br />
                            <span className="text-accent">WE HALLUCINATE.</span>
                        </h2>

                        <div className="space-y-8 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                            <p>
                                Traditional design is bounded by human capability. We break those bonds by partnering with intelligence that doesn't sleep, doesn't tire, and explores millions of permutations in seconds.
                            </p>
                            <p>
                                Our philosophy is rooted in "Controlled Chaos" — harnessing the wild, unpredictable nature of generative models and tempering them with rigorous design principles and usability standards.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 mt-16">
                            <div>
                                <h4 className="text-3xl font-display font-bold text-white mb-2">150+</h4>
                                <p className="text-sm font-mono text-gray-500">MODELS TRAINED</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-display font-bold text-white mb-2">∞</h4>
                                <p className="text-sm font-mono text-gray-500">POSSIBILITIES</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative" ref={ref}>
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 blur-[100px] rounded-full opacity-50"></div>

                        <motion.div
                            className="relative h-full min-h-[500px] border border-white/10 bg-black/50 backdrop-blur-sm p-8 flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Header */}
                            <div className="flex justify-between items-start mb-8">
                                <motion.div
                                    initial={{ rotate: -180, opacity: 0 }}
                                    animate={isInView ? { rotate: 0, opacity: 1 } : {}}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <Hexagon className="text-accent w-10 h-10" />
                                </motion.div>
                                <div className="font-mono text-xs text-gray-500">SYS.01</div>
                            </div>

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
                                            <span className="font-mono text-2xl font-bold text-white">
                                                <AnimatedCounter value={metric.value} inView={isInView} />
                                            </span>
                                        </div>
                                        <div className="h-3 bg-gray-800/80 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full group-hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] transition-shadow duration-300"
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
                                className="mt-8 p-4 border border-white/10 bg-black/80 rounded"
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 1 }}
                            >
                                {terminalLines.map((line, index) => (
                                    <p
                                        key={index}
                                        className={`font-mono text-sm ${index === terminalLines.length - 1 ? 'text-white' : 'text-gray-400'} ${index < terminalLines.length - 1 ? 'mb-2' : ''}`}
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
