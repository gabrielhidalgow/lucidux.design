"use client";

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, Zap, CheckCircle, ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { ShinyButton } from "./ShinyButton";
import { useFocusTrap } from "@/hooks/useFocusTrap";

// Define the shape of the project data expected by the modal
export interface ProjectDetails {
    id: number;
    year: string;
    category: string;
    title: string;
    image: string;
    client: string;
    completionTime: string;
    scopeOfWork: string;
    stack: React.ReactNode[]; // Array of icon components
    problem: string;
    solution: string;
    galleryImages: string[]; // Additional images
    link?: string; // Optional link to live project
    summary: string; // Short description for the header
}

interface ProjectDetailsModalProps {
    project: ProjectDetails | null;
    projects: ProjectDetails[];
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (project: ProjectDetails) => void;
}

export function ProjectDetailsModal({ project, projects, isOpen, onClose, onNavigate }: ProjectDetailsModalProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const focusTrapRef = useFocusTrap<HTMLDivElement>(isOpen);

    // Get next project (wrap around)
    const currentIndex = project ? projects.findIndex(p => p.id === project.id) : -1;
    const nextProject = projects[(currentIndex + 1) % projects.length];

    // Scroll to top when project changes
    useEffect(() => {
        if (scrollRef.current && project) {
            scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [project?.id]);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!isOpen || !project) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[var(--color-background)]/80 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
                aria-hidden="true"
            ></div>

            {/* Modal Container */}
            <div
                ref={focusTrapRef}
                className="relative w-full max-w-6xl h-[90vh] bg-background border border-[var(--color-foreground)]/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in-scale"
            >

                {/* Close Button - Absolute */}
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors backdrop-blur-md group focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] outline-none"
                >
                    <X className="w-5 h-5 text-[var(--color-foreground)] group-hover:rotate-90 transition-transform duration-300" aria-hidden="true" />
                </button>

                {/* Scrollable Content */}
                <div ref={scrollRef} className="w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="p-8 md:p-12 lg:p-16 flex flex-col gap-16"
                        >

                            {/* Header Section */}
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 border-b border-[var(--color-foreground)]/10 pb-12">
                            <div className="flex-1">
                                <h2 id="modal-title" className="text-5xl md:text-7xl font-display font-bold mb-6 text-[var(--color-foreground)] leading-tight">
                                    {project.title.split(' ').map((word, i) => (
                                        <span key={i} className="block">{word}</span>
                                    ))}
                                </h2>
                                <p className="text-xl text-gray-400 max-w-xl">
                                    {project.summary}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-x-12 gap-y-8 text-sm uppercase tracking-wider">
                                <div>
                                    <h4 className="text-gray-500 font-bold mb-2">Company</h4>
                                    <p className="text-[var(--color-foreground)] font-medium">{project.client}</p>
                                </div>
                                <div>
                                    <h4 className="text-gray-500 font-bold mb-2">Completion Time</h4>
                                    <p className="text-[var(--color-foreground)] font-medium">{project.completionTime}</p>
                                </div>
                                <div>
                                    <h4 className="text-gray-500 font-bold mb-2">Scope of Work</h4>
                                    <p className="text-[var(--color-foreground)] font-medium">{project.scopeOfWork}</p>
                                </div>
                                {project.link && (
                                    <div>
                                        <h4 className="text-gray-500 font-bold mb-2">Live Project</h4>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-accent font-bold hover:underline flex items-center gap-2 group/link"
                                        >
                                            View Website
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" aria-hidden="true" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Hero Image & Gallery Top */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="relative bg-surface rounded-lg overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={800}
                                    height={800}
                                    className="w-full h-auto object-contain lg:object-cover lg:aspect-square"
                                />
                            </div>
                            <div className="relative bg-surface rounded-lg overflow-hidden">
                                {project.galleryImages[0] ? (
                                    <Image
                                        src={project.galleryImages[0]}
                                        alt={`${project.title} - detailed view`}
                                        width={800}
                                        height={800}
                                        className="w-full h-auto object-contain lg:object-cover lg:aspect-square"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-white/5 aspect-square" aria-hidden="true">
                                        <span className="text-[var(--color-foreground)]/20">Additional View</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Problem Section */}
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-3 text-accent">
                                <Zap className="w-6 h-6" aria-hidden="true" />
                                <h3 className="text-2xl font-bold font-display uppercase">The Problem</h3>
                            </div>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-4xl">
                                {project.problem}
                            </p>
                        </div>

                        {/* Middle Large Image */}
                        {project.galleryImages[1] && (
                            <div className="relative w-full bg-surface rounded-xl overflow-hidden border border-[var(--color-foreground)]/5">
                                <Image
                                    src={project.galleryImages[1]}
                                    alt={`${project.title} - interface overview`}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto object-contain lg:object-cover lg:aspect-[16/9]"
                                />
                            </div>
                        )}

                        {/* Solution Section */}
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-3 text-accent">
                                <CheckCircle className="w-6 h-6" aria-hidden="true" />
                                <h3 className="text-2xl font-bold font-display uppercase">The Solution</h3>
                            </div>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-4xl">
                                {project.solution}
                            </p>
                        </div>

                        {/* Next Project Navigation */}
                        {nextProject && (
                            <button
                                onClick={() => onNavigate(nextProject)}
                                aria-label={`View next project: ${nextProject.title}`}
                                className="group flex flex-col items-center gap-4 py-8 border-t border-b border-[var(--color-foreground)]/10 hover:border-accent/30 transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] outline-none rounded-lg"
                            >
                                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 group-hover:text-accent transition-colors flex items-center gap-2">
                                    Next Project
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                </span>
                                <span className="text-2xl md:text-3xl font-display font-bold text-[var(--color-foreground)]/60 group-hover:text-[var(--color-foreground)] transition-colors">
                                    {nextProject.title}
                                </span>
                            </button>
                        )}

                        {/* CTA / Footer of Modal */}
                        <div className="mt-8 relative overflow-hidden rounded-2xl bg-gradient-to-r from-surface to-[var(--color-background)] border border-[var(--color-foreground)]/10 p-12 text-center">
                            <div className="relative z-10 flex flex-col items-center gap-8">
                                <h3 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-foreground)] max-w-2xl">
                                    Let's make your interface convert
                                </h3>
                                <ShinyButton
                                    as="a"
                                    href="https://calendly.com/gabrielhidalgo/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="primary"
                                    size="lg"
                                >
                                    Book a Consultation Call
                                </ShinyButton>
                            </div>
                            {/* Ambient background glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-3xl rounded-full"></div>
                        </div>

                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>,
        document.body
    );
}
