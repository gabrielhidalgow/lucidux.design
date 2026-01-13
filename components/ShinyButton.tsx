"use client";

import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type BaseProps = {
    variant?: "primary" | "secondary";
    size?: "sm" | "lg";
    children: React.ReactNode;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

type ShinyButtonProps = ButtonProps | AnchorProps;

export function ShinyButton({
    variant = "primary",
    size = "lg",
    children,
    className = "",
    as = "button",
    ...props
}: ShinyButtonProps) {
    const baseStyles = `
        shiny-cta
        relative overflow-hidden rounded-full
        font-bold font-body uppercase tracking-wider
        cursor-pointer
        transition-all duration-300
        outline-none
        focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]
        active:translate-y-[1px]
    `;

    const focusRingStyles = {
        primary: "focus-visible:ring-black",
        secondary: "focus-visible:ring-accent",
    };

    const sizeStyles = {
        sm: "text-xs px-4 py-2",
        lg: "text-sm px-8 py-4",
    };

    const variantStyles = {
        primary: "shiny-cta-primary text-black",
        secondary: "shiny-cta-secondary text-white",
    };

    const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${focusRingStyles[variant]} ${className}`.trim();

    if (as === "a") {
        const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
        return (
            <a className={combinedClassName} {...anchorProps}>
                <span className="relative z-10">{children}</span>
            </a>
        );
    }

    const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
        <button className={combinedClassName} {...buttonProps}>
            <span className="relative z-10">{children}</span>
        </button>
    );
}
