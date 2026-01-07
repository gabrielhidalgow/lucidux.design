"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export function FeaturedTestimonial() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 md:py-32 bg-black" ref={ref}>
            <div className="container mx-auto px-6 md:px-12">
                {/* Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
                        Trusted by <span className="text-accent">Startup Founders</span>
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base tracking-wide">
                        From solo bootstrappers to Y-combinator backed
                    </p>
                </motion.div>

                {/* Testimonial Quote */}
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <blockquote className="text-xl md:text-2xl lg:text-3xl font-body italic text-gray-300 leading-relaxed mb-10">
                        &ldquo;If you&apos;re on the hunt for a UX designer who&apos;s not only good but also super easy and fast to work with, Gabriel&apos;s your man. Really pleased with how everything turned out.&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                            <Image
                                src="/testimonials/michael-doring.avif"
                                alt="Michael John Doring"
                                width={48}
                                height={48}
                                className="object-cover"
                            />
                        </div>
                        <div className="text-left">
                            <p className="text-white font-medium">Michael John Doring</p>
                            <p className="text-gray-500 text-sm">Monaco Solicitors</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
