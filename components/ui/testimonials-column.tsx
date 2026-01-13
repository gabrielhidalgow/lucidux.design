"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

type Testimonial = {
    text: string;
    image: string;
    name: string;
    role: string;
};

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: Testimonial[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[...new Array(2)].map((_, index) => (
                    <React.Fragment key={index}>
                        {props.testimonials.map(({ text, image, name, role }, i) => (
                            <div
                                className="p-6 rounded-2xl border border-[var(--color-foreground)]/10 bg-[var(--color-foreground)]/5 backdrop-blur-sm max-w-xs w-full hover:bg-[var(--color-foreground)]/10 transition-colors duration-300"
                                key={i}
                            >
                                <p className="text-gray-300 leading-relaxed">{text}</p>
                                <div className="flex items-center gap-3 mt-5">
                                    <Image
                                        width={40}
                                        height={40}
                                        src={image}
                                        alt={`Photo of ${name}`}
                                        className="h-10 w-10 rounded-full object-cover"
                                        unoptimized={image.startsWith('http')}
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-medium text-[var(--color-foreground)] tracking-tight leading-5">
                                            {name}
                                        </span>
                                        <span className="text-gray-500 text-sm leading-5 tracking-tight">
                                            {role}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};
