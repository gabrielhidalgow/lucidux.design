import { User, Check } from "lucide-react";

export function UsabilityTestingAnimation() {
    return (
        <div className="relative w-full h-full flex items-center justify-center z-10">

            {/* Main Phone Card */}
            <div className="flex flex-col items-center gap-2 transform z-10 animate-[float_5s_ease-in-out_infinite]">
                <div className="relative">
                    {/* Main Glow */}
                    <div className="absolute -inset-2 bg-[var(--color-accent)]/15 rounded-2xl blur-md animate-pulse"></div>

                    {/* Phone Body */}
                    <div className="w-16 h-24 bg-zinc-900 rounded-xl border border-[var(--color-accent)]/50 shadow-[0_0_30px_-5px_rgba(var(--accent-rgb),0.25)] flex flex-col items-center pt-2 relative overflow-hidden">

                        {/* Phone Notch */}
                        <div className="w-6 h-1.5 bg-zinc-800 rounded-full mb-2"></div>

                        {/* Checklist Items */}
                        <div className="flex flex-col gap-1.5 px-1.5 w-full">
                            {/* Item 1 */}
                            <div className="flex items-center gap-1">
                                <div className="w-3 h-3 rounded-sm border border-zinc-700 flex items-center justify-center bg-zinc-950">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="8"
                                        height="8"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="var(--color-accent)"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5" className="animate-[draw_3s_ease-in-out_infinite]" />
                                    </svg>
                                </div>
                                <div className="h-1 flex-1 bg-zinc-700 rounded-full"></div>
                            </div>

                            {/* Item 2 */}
                            <div className="flex items-center gap-1">
                                <div className="w-3 h-3 rounded-sm border border-zinc-700 flex items-center justify-center bg-zinc-950">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="8"
                                        height="8"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="var(--color-accent)"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5" className="animate-[draw_3s_ease-in-out_infinite_0.3s]" />
                                    </svg>
                                </div>
                                <div className="h-1 flex-1 bg-zinc-700 rounded-full"></div>
                            </div>

                            {/* Item 3 */}
                            <div className="flex items-center gap-1">
                                <div className="w-3 h-3 rounded-sm border border-zinc-700 flex items-center justify-center bg-zinc-950">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="8"
                                        height="8"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="var(--color-accent)"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5" className="animate-[draw_3s_ease-in-out_infinite_0.6s]" />
                                    </svg>
                                </div>
                                <div className="h-1 flex-1 bg-zinc-700 rounded-full"></div>
                            </div>
                        </div>

                    </div>

                    {/* User Avatar - bottom right */}
                    <div className="absolute -bottom-2 -right-3 p-1.5 rounded-full bg-[var(--color-accent)] shadow-md animate-[bounce_2s_infinite] [animation-delay:0.5s]">
                        <User size={12} className="text-[var(--color-background)]" />
                    </div>

                </div>
            </div>

            <style jsx>{`
        .animate-\[draw_3s_ease-in-out_infinite\],
        .animate-\[draw_3s_ease-in-out_infinite_0\.3s\],
        .animate-\[draw_3s_ease-in-out_infinite_0\.6s\] {
           stroke-dasharray: 30;
           stroke-dashoffset: 30;
        }

        .animate-\[draw_3s_ease-in-out_infinite\] {
           animation: draw 3s ease-in-out infinite;
        }

        .animate-\[draw_3s_ease-in-out_infinite_0\.3s\] {
           animation: draw 3s ease-in-out infinite 0.3s;
        }

        .animate-\[draw_3s_ease-in-out_infinite_0\.6s\] {
           animation: draw 3s ease-in-out infinite 0.6s;
        }

        @keyframes draw {
            0% { stroke-dashoffset: 30; opacity: 0; }
            20% { stroke-dashoffset: 0; opacity: 1; }
            55% { stroke-dashoffset: 0; opacity: 1; }
            70% { stroke-dashoffset: -30; opacity: 0; }
            100% { stroke-dashoffset: -30; opacity: 0; }
        }
      `}</style>
        </div>
    );
}
