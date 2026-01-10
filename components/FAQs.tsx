"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    {
        id: "item-1",
        question: "What is AI design consulting?",
        answer: "AI design consulting helps businesses integrate artificial intelligence tools into their design workflows. We assess your current processes, recommend the right AI tools, implement them, and train your team to use them effectively.",
    },
    {
        id: "item-2",
        question: "How is this different from hiring a traditional designer?",
        answer: "Unlike traditional designers who create assets manually, we focus on building systems and workflows that leverage AI to multiply your team's output. The goal is to make your existing team more efficient, not replace them.",
    },
    {
        id: "item-3",
        question: "What AI tools do you work with?",
        answer: "We work with a range of AI tools including Midjourney, DALL-E, Stable Diffusion for image generation, as well as Figma AI, Adobe Firefly, and various automation tools. The specific tools depend on your needs and existing tech stack.",
    },
    {
        id: "item-4",
        question: "How long does a typical engagement take?",
        answer: "Most projects run 2-8 weeks depending on scope. A basic audit and strategy takes 2-3 weeks, while a full implementation with training can take 6-8 weeks. We also offer ongoing support packages.",
    },
    {
        id: "item-5",
        question: "Is this suitable for small businesses?",
        answer: "Absolutely. We work with teams of 5-50 people. Small businesses often see the biggest ROI because AI tools can dramatically reduce the need for expensive agency work or additional hires.",
    },
    {
        id: "item-6",
        question: "What's the investment for AI design consulting?",
        answer: "Projects typically range from $5,000-$25,000 depending on scope and complexity. I offer fixed-fee packages so you know exactly what you're paying upfront. Most clients see ROI within 2-3 months.",
    },
    {
        id: "item-7",
        question: "Do you work remotely?",
        answer: "Yes, we work 100% remotely with clients across Australia and New Zealand. We use video calls, screen sharing, and collaborative tools to ensure seamless communication regardless of location.",
    },
    {
        id: "item-8",
        question: "Can you work with our existing design team?",
        answer: "Definitely. In fact, that's the ideal scenario. We work alongside your team to upskill them on AI tools, not replace them. The goal is to make your designers more productive and capable.",
    },
    {
        id: "item-9",
        question: "What industries do you work with?",
        answer: "We've worked with SaaS companies, e-commerce brands, marketing agencies, and startups across various industries. The principles of AI-enhanced design apply broadly, though we tailor the approach to each industry's specific needs.",
    },
    {
        id: "item-10",
        question: "Do you offer ongoing support after the project?",
        answer: "Yes. All projects include 30 days of post-launch support. We also offer quarterly review packages for clients who want ongoing guidance as AI tools evolve and new opportunities emerge.",
    },
    {
        id: "item-11",
        question: "Will AI replace our designers?",
        answer: "No. AI is a tool that enhances human creativity, not replaces it. Your designers will still make the strategic and creative decisions—AI just handles the repetitive, time-consuming tasks so they can focus on higher-value work.",
    },
    {
        id: "item-12",
        question: "How do I get started?",
        answer: "Book a free 30-minute consultation call. We'll discuss your current challenges, goals, and whether AI design consulting is the right fit for your team. No pressure, no commitment required.",
    },
];

export function FAQs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-16 md:py-32 bg-[var(--color-background)]">
            <div className="container mx-auto px-6 md:px-12" ref={ref}>
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                        Frequently<br />asked <span className="text-accent">questions</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        Discover quick and comprehensive answers to common questions about our platform, services, and features.
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="rounded-2xl border border-[var(--color-foreground)]/20 overflow-hidden">
                        <Accordion type="single" collapsible>
                            {faqItems.map((item, index) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className={index < faqItems.length - 1 ? "border-b border-dashed border-[var(--color-foreground)]/20" : ""}
                                >
                                    <AccordionTrigger className="text-[var(--color-foreground)] text-base md:text-lg font-semibold hover:no-underline px-6 py-5">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-400 text-base leading-relaxed px-6 pb-5">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <p className="text-gray-500 text-base mt-8">
                        Can't find what you're looking for? Contact us on{" "}
                        <a href="mailto:gabrielhidalgow@gmail.com" className="text-[var(--color-foreground)] font-medium hover:text-accent transition-colors">gabrielhidalgow@gmail.com</a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
