"use client";

import { motion } from "motion/react";

interface IconProps {
  isHovered: boolean;
  className?: string;
}

// Shared stroke classes: yellow on mobile, gray on desktop, yellow on desktop hover
const strokeClasses = "stroke-accent md:stroke-gray-500 md:group-hover:stroke-accent transition-colors duration-300";

// Audit - Magnifying Glass
export function AuditIcon({ isHovered, className = "" }: IconProps) {
  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      animate={{
        scale: isHovered ? 1.1 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <circle
        cx="20"
        cy="20"
        r="10"
        strokeWidth="2"
        fill="none"
        className={strokeClasses}
      />
      <line
        x1="27"
        y1="27"
        x2="36"
        y2="36"
        strokeWidth="2"
        strokeLinecap="round"
        className={strokeClasses}
      />
    </motion.svg>
  );
}

// Strategy - Route/Path with Waypoints
export function StrategyIcon({ isHovered, className = "" }: IconProps) {
  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Path */}
      <path
        d="M10 38 L10 28 Q10 24 14 24 L34 24 Q38 24 38 20 L38 10"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        className={strokeClasses}
      />
      {/* Start point */}
      <circle
        cx="10"
        cy="38"
        r="3"
        strokeWidth="2"
        fill="none"
        className={strokeClasses}
      />
      {/* End point (flag/destination) */}
      <circle
        cx="38"
        cy="10"
        r="3"
        className={`${strokeClasses} fill-accent md:fill-gray-500 md:group-hover:fill-accent`}
      />
      {/* Moving dot - only renders on hover, one-way animation */}
      {isHovered && (
        <motion.circle
          r="3"
          className="fill-accent md:fill-gray-500 md:group-hover:fill-accent"
          initial={{ cx: 10, cy: 38 }}
          animate={{
            cx: [10, 10, 12, 24, 36, 38, 38],
            cy: [38, 28, 24, 24, 24, 20, 10],
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.svg>
  );
}

// Implementation - Gear/Cog
export function ImplementationIcon({ isHovered, className = "" }: IconProps) {
  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      animate={{
        rotate: isHovered ? 45 : 0,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ originX: "50%", originY: "50%" }}
    >
      <path
        d="M24 8L26.5 12.5L32 11L31 16.5L36.5 18L33 22L36.5 26L31 27.5L32 33L26.5 31.5L24 36L21.5 31.5L16 33L17 27.5L11.5 26L15 22L11.5 18L17 16.5L16 11L21.5 12.5L24 8Z"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
        className={strokeClasses}
      />
      <circle
        cx="24"
        cy="22"
        r="5"
        strokeWidth="2"
        fill="none"
        className={strokeClasses}
      />
    </motion.svg>
  );
}

// Support - Headset
export function SupportIcon({ isHovered, className = "" }: IconProps) {
  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      animate={{
        scale: isHovered ? 1.1 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Headband */}
      <path
        d="M12 26V22C12 15.4 17.4 10 24 10C30.6 10 36 15.4 36 22V26"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        className={strokeClasses}
      />
      {/* Left earpiece */}
      <rect
        x="8"
        y="24"
        width="6"
        height="10"
        rx="2"
        strokeWidth="2"
        fill="none"
        className={strokeClasses}
      />
      {/* Right earpiece */}
      <rect
        x="34"
        y="24"
        width="6"
        height="10"
        rx="2"
        strokeWidth="2"
        fill="none"
        className={strokeClasses}
      />
      {/* Microphone */}
      <path
        d="M36 32V36C36 37.1 35.1 38 34 38H28"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        className={strokeClasses}
      />
      <circle
        cx="26"
        cy="38"
        r="2"
        strokeWidth="2"
        fill="none"
        className={strokeClasses}
      />
    </motion.svg>
  );
}
