"use client";

import { useState, useRef } from "react";
import { ArrowUpRight, Database, Server, Globe, Layers, Zap } from "lucide-react";
import { ProjectDetailsModal, type ProjectDetails } from "./ProjectDetailsModal";
import { motion, useInView } from "motion/react";

export function Work() {
    const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects: ProjectDetails[] = [
        {
            id: 1,
            year: "2023",
            category: "Product Design",
            title: "REWARDPAY WEB PORTAL",
            image: "/images/rewardpay.png",
            link: "https://rewardpay.com.au",
            client: "REWARDPAY",
            completionTime: "Ongoing",
            scopeOfWork: "Product Design, UI & UX",
            stack: [<Globe key="1" className="w-4 h-4" />, <Layers key="2" className="w-4 h-4" />, <Database key="3" className="w-4 h-4" />],
            summary: "A payment solution enabling businesses to earn credit card reward points on all expenses, featuring complete Qantas Business Rewards integration.",
            problem: "RewardPay had just secured a major partnership with Qantas Business Rewards, requiring strategic product design to integrate new functionality while supporting their growth trajectory without disrupting the current user experience.",
            solution: "Designed complete integration of Qantas Business Rewards system into the existing RewardPay platform. Created dedicated landing pages for Qantas linking, implemented tracking sections for earned points, and established scalable design patterns to support continued expansion and future partnerships.",
            galleryImages: [
                "/images/synthetic-gallery.png",
                "/images/synthetic-vogue.png"
            ]
        },
        {
            id: 2,
            year: "2022",
            category: "Web Design",
            title: "MONACO LAWYERS",
            image: "/images/monaco.png",
            link: "https://monacosolicitors.com.au/",
            client: "MONACO SOLICITORS",
            completionTime: "2 Years",
            scopeOfWork: "Branding, Product Design, Web",
            stack: [<Layers key="1" className="w-4 h-4" />, <Globe key="2" className="w-4 h-4" />, <Zap key="3" className="w-4 h-4" />],
            summary: "Complete website redesign and design system development for Australia's highest-rated compensation law firm with 19 locations nationwide.",
            problem: "Needed to fully redesign an existing content-heavy website while maintaining SEO alignment, creating visual consistency across all digital touchpoints, and converting visitors into clients through strategic UX design.",
            solution: "Built a comprehensive design system from scratch using atomic design principles. Developed reusable UI components with multiple states, created clear documentation for developers, and achieved 57.7k sessions with 5:53 average session duration—significantly exceeding industry benchmarks for legal websites.",
            galleryImages: [
                "/images/nebula-gallery.png",
                "/images/nebula-protocol.png"
            ]
        },
        {
            id: 3,
            year: "2024",
            category: "UI Design",
            title: "COMMBANK PET INSURANCE",
            image: "/images/petsure.png",
            link: "https://www.commbank.com.au/insurance/pet-insurance.html",
            client: "COMMBANK",
            completionTime: "3 Months",
            scopeOfWork: "UI Design, Web Application",
            stack: [<Globe key="1" className="w-4 h-4" />, <Layers key="2" className="w-4 h-4" />, <Server key="3" className="w-4 h-4" />],
            summary: "Fully responsive web experience for CommBank's pet insurance product in partnership with PetSure, awarded Mozo recognition for Exceptional Quality.",
            problem: "Create intuitive interfaces that integrate seamlessly into CommBank's existing digital ecosystem while balancing business requirements with user needs and simplifying the traditionally complex insurance application process.",
            solution: "Delivered end-to-end digital experience through close collaboration with the Senior UX Designer, stakeholders, and PetSure design team. The product launched successfully within planned timeline, establishing CommBank's entry into the pet insurance market with strong initial adoption rates.",
            galleryImages: [
                "/images/cyber-gallery.png",
                "/images/cyber-flora.png"
            ]
        },
    ];

    return (
        <section id="work" className="py-32 bg-surface relative overflow-hidden z-10">
            <div className="container mx-auto px-6 md:px-12 mb-16">
                <h2 className="text-5xl md:text-7xl font-display font-bold">
                    SELECTED <span className="text-white/10">WORK</span>
                </h2>
            </div>

            <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative w-full aspect-[4/3] md:aspect-[3/4] overflow-hidden cursor-pointer bg-accent hover:bg-black transition-colors duration-500"
                        onClick={() => setSelectedProject(project)}
                    >
                        {/* Default state - Yellow background with title at bottom */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end group-hover:opacity-0 transition-opacity duration-500">
                            <h3 className="text-3xl md:text-4xl font-display font-bold text-black leading-tight">
                                {project.title}
                            </h3>
                        </div>

                        {/* Hover state - Black background with full info */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="flex justify-between items-start">
                                <span className="px-3 py-1 bg-accent text-black text-xs font-bold uppercase tracking-widest">
                                    {project.year}
                                </span>
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    <ArrowUpRight className="w-6 h-6 text-black" />
                                </div>
                            </div>

                            <div>
                                <p className="text-accent font-mono text-sm mb-2">{project.category}</p>
                                <h3 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <ProjectDetailsModal
                project={selectedProject}
                projects={projects}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                onNavigate={(project) => setSelectedProject(project)}
            />
        </section>
    );
}
