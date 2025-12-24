"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Expertise() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const processSteps = [
        {
            id: "01",
            title: "Audit",
            subtitle: "Assess your current tools and workflows",
            description: "I review your existing design processes, identify bottlenecks, and evaluate where AI can make the biggest impact.",
            bullets: ["Workflow analysis report", "Tool stack evaluation", "AI opportunity assessment", "Priority recommendations"],
        },
        {
            id: "02",
            title: "Strategy",
            subtitle: "Create your AI implementation roadmap",
            description: "Based on the audit, I recommend specific AI tools and create a step-by-step plan tailored to your team's needs and budget.",
            bullets: ["Custom AI roadmap", "Tool selection guide", "ROI projections", "Timeline & milestones"],
        },
        {
            id: "03",
            title: "Implementation",
            subtitle: "Set up systems and automate processes",
            description: "I help you integrate AI tools into your workflow, build design systems, and set up automations that save hours of manual work.",
            bullets: ["AI tool setup", "Design system optimization", "Workflow automation", "Team integration"],
        },
        {
            id: "04",
            title: "Support",
            subtitle: "Train your team and provide ongoing guidance",
            description: "I ensure your team knows how to use the new tools effectively, with documentation and follow-up support as you scale.",
            bullets: ["Training materials", "30-day post-launch support", "Quarterly reviews", "Slack/email access"],
        },
    ];

    return (
        <section id="expertise" className="py-32 bg-black">
            <div className="container mx-auto px-6 md:px-12 mb-24" ref={ref}>
                <motion.div
                    className="flex flex-col md:flex-row md:items-end lg:items-end justify-between gap-8 lg:gap-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                        How we <span className="text-accent">work</span>
                    </h2>
                </motion.div>
            </div>

            <div className="flex flex-col">
                {processSteps.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="group relative border-t border-white/10 py-12 md:py-14 lg:py-16 hover:bg-surface transition-colors duration-500"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-8 items-start">
                            <div className="md:col-span-2 lg:col-span-2 text-sm font-mono text-gray-500">{item.id}</div>

                            <div className="md:col-span-5 lg:col-span-5">
                                <h3 className="text-4xl md:text-4xl lg:text-5xl font-display font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base">
                                    {item.subtitle}
                                </p>
                            </div>

                            <div className="md:col-span-5 lg:col-span-4 md:col-start-8 lg:col-start-9">
                                <p className="text-lg text-gray-400 font-body leading-relaxed group-hover:text-white transition-colors duration-300 mb-6">
                                    {item.description}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {item.bullets.map((bullet, i) => (
                                        <span key={bullet}>
                                            {bullet}{i < item.bullets.length - 1 && " • "}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
