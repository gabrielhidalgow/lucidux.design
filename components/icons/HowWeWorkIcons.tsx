"use client";

import { motion } from "motion/react";

interface IconProps {
  isHovered: boolean;
  className?: string;
}

// Shared stroke classes: yellow on mobile, gray on desktop, yellow on desktop hover
const strokeClasses = "stroke-accent md:stroke-gray-500 md:group-hover:stroke-accent transition-colors duration-300";

// Audit - Magnifying Glass with Analysis Lines
export function AuditIcon({ isHovered, className = "" }: IconProps) {
  const lines = [
    { y: 10, width: 12 },
    { y: 20, width: 8 },
    { y: 30, width: 12 },
  ];

  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Magnifying glass - right side, larger */}
      <circle
        cx="30"
        cy="20"
        r="11"
        strokeWidth="2"
        fill="none"
        className={strokeClasses}
      />
      <line
        x1="37"
        y1="28"
        x2="44"
        y2="36"
        strokeWidth="2"
        strokeLinecap="round"
        className={strokeClasses}
      />

      {/* Analysis lines - left side, animated pulse */}
      {lines.map((line, i) => (
        <motion.line
          key={i}
          x1="4"
          y1={line.y}
          x2={4 + line.width}
          y2={line.y}
          strokeWidth="2"
          strokeLinecap="round"
          className="stroke-accent md:stroke-transparent md:group-hover:stroke-accent"
          animate={{
            opacity: [0.15, 1, 0.15],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
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
      {/* X mark - top left */}
      <g
        className="stroke-accent md:stroke-transparent md:group-hover:stroke-accent transition-colors duration-300"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <line x1="6" y1="10" x2="12" y2="16" />
        <line x1="12" y1="10" x2="6" y2="16" />
      </g>

      {/* X mark - bottom right */}
      <g
        className="stroke-accent md:stroke-transparent md:group-hover:stroke-accent transition-colors duration-300"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <line x1="38" y1="38" x2="44" y2="44" />
        <line x1="44" y1="38" x2="38" y2="44" />
      </g>

      {/* Path */}
      <path
        d="M20 38 L20 28 Q20 24 24 24 L34 24 Q38 24 38 20 L38 14"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        className={strokeClasses}
      />

      {/* Start point - filled circle */}
      <circle
        cx="20"
        cy="38"
        r="3"
        className="fill-accent md:fill-gray-500 md:group-hover:fill-accent"
      />

      {/* End point - arrow pointing up */}
      <path
        d="M38 18 L38 8"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        className={strokeClasses}
      />
      <path
        d="M32 14 L38 6 L44 14"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className={strokeClasses}
      />

      {/* Moving dot - smooth animation from start to end */}
      <motion.circle
        r="3"
        className="fill-accent md:fill-transparent md:group-hover:fill-accent"
        animate={{
          cx: [20, 20, 38, 38],
          cy: [38, 24, 24, 14],
          opacity: [1, 1, 1, 0],
        }}
        transition={{
          duration: 1.7,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0.3,
          times: [0, 0.35, 0.65, 1],
        }}
      />
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
      className={`${className} max-md:animate-[spin_6s_linear_infinite] max-md:origin-center`}
      initial={{ rotate: 0 }}
      animate={{
        rotate: isHovered ? 360 : 0,
      }}
      transition={{
        duration: isHovered ? 6 : 0,
        ease: "linear",
        repeat: isHovered ? Infinity : 0,
      }}
      style={{ transformOrigin: "center center" }}
    >
      <g style={{ transform: "scale(1.1)", transformOrigin: "center" }}>
        <path
          d="M24 10L26.5 14.5L32 13L31 18.5L36.5 20L33 24L36.5 28L31 29.5L32 35L26.5 33.5L24 38L21.5 33.5L16 35L17 29.5L11.5 28L15 24L11.5 20L17 18.5L16 13L21.5 14.5L24 10Z"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
          className={strokeClasses}
        />
        <circle
          cx="24"
          cy="24"
          r="5"
          strokeWidth="2"
          fill="none"
          className={strokeClasses}
        />
      </g>
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
    >
      {/* Headband */}
      <path
        d="M12 24V22C12 15.4 17.4 10 24 10C30.6 10 36 15.4 36 22V24"
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
        d="M40 32V36C40 37.1 39.1 38 38 38H28"
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
      {/* Audio visualization dots */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx={8 + i * 4}
          cy="44"
          r="1.5"
          className="fill-accent md:fill-transparent md:group-hover:fill-accent"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}
    </motion.svg>
  );
}
