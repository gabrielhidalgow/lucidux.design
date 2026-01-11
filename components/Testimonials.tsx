"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { TestimonialsColumn } from "@/components/ui/testimonials-column";
import { ShinyButton } from "./ShinyButton";

const testimonials = [
    {
        text: "If you're on the hunt for a UX designer who's not only good but also super easy and fast to work with, Gabriel's your man. Really pleased with how everything turned out.",
        image: "/testimonials/michael-doring.avif",
        name: "Michael John Doring",
        role: "Monaco Solicitors",
    },
    {
        text: "You come across as someone with great knowledge of your topic and bring a lot of experience to make things better.",
        image: "/testimonials/yashu.avif",
        name: "Yashu Singh",
        role: "CommBank Product Owner",
    },
    {
        text: "Gabriel is really easy to work with and his output was excellent.",
        image: "/testimonials/mark-dawes.avif",
        name: "Mark Dawes",
        role: "RewardPay",
    },
    {
        text: "Gabriel has been working with us for the better part of two years. We have and continue to be happy with his flexibility in meeting our timeframes, collaboration and excellent result!",
        image: "/testimonials/andrew-barton.avif",
        name: "Andrew Barton",
        role: "Whistle",
    },
    {
        text: "Gabriel consistently brought a strong eye for detail, deep understanding of design systems, and a knack for translating complex requirements into elegant UI solutions.",
        image: "/testimonials/ram-prakash.avif",
        name: "Ram Prakash K",
        role: "CommBank UX Designer",
    },
    {
        text: "One of the most commendable aspects of your work on the CBA project has been your proactive communication. Your highly positive work ethic is evident in the way you promptly address queries.",
        image: "/testimonials/alan.avif",
        name: "Alan Ung",
        role: "CommBank Software Engineer",
    },
    {
        text: "I've had the pleasure of working with Gabriel on multiple projects, and the results have always been exceptional. He's creative, prompt, and very easy to work with.",
        image: "/testimonials/mourad.avif",
        name: "Mourad Kessas",
        role: "CTO RewardPay",
    },
    {
        text: "Gabriel's attention to detail and commitment to quality made our collaboration seamless. The final product exceeded our expectations.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        name: "Sarah Chen",
        role: "Product Lead",
    },
    {
        text: "Working with Gabriel transformed our design process. His expertise in AI tools helped us achieve more in less time.",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        name: "Emma Wilson",
        role: "Startup Founder",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-16 md:py-32 bg-[var(--color-background)] relative overflow-hidden">
            {/* Accent-tinted background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(204,255,0,0.03)] via-transparent to-transparent" />

            {/* Subtle top border glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />

            <div className="container mx-auto px-6 md:px-12 relative" ref={ref}>
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
                        Trusted by teams & <span className="text-accent">founders</span>
                    </h2>
                </motion.div>

                <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[700px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={18} />
                    <TestimonialsColumn
                        testimonials={secondColumn}
                        className="hidden md:block"
                        duration={22}
                    />
                    <TestimonialsColumn
                        testimonials={thirdColumn}
                        className="hidden lg:block"
                        duration={16}
                    />
                </div>

                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <ShinyButton
                        as="a"
                        href="https://calendly.com/gabrielhidalgo/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        size="lg"
                    >
                        Book a consultation call
                    </ShinyButton>
                </motion.div>
            </div>
        </section>
    );
}
