import { Check, Search } from "lucide-react";

export function DataValidationAnimation() {
    return (
        <div className="relative w-full h-full flex items-center justify-center z-10">

            {/* Floating Background Elements */}
            <div className="absolute bottom-[20%] right-[20%] w-2 h-2 bg-zinc-800 rounded-full animate-[float_4s_ease-in-out_infinite_1s]"></div>

            {/* Main Checkbox Card */}
            <div className="flex flex-col items-center gap-2 transform z-10 animate-[float_5s_ease-in-out_infinite]">
                <div className="relative">
                    {/* Main Glow - Increased Intensity */}
                    <div className="absolute -inset-2 bg-[#ccff00]/15 rounded-xl blur-md animate-pulse"></div>

                    {/* Main Card Body - Increased Shadow */}
                    <div className="w-20 h-20 bg-zinc-900 rounded-xl border border-[#ccff00]/50 shadow-[0_0_30px_-5px_rgba(204,255,0,0.25)] flex items-center justify-center relative overflow-hidden">

                        {/* Checkbox Frame */}
                        <div className="w-10 h-10 rounded-md border-2 border-zinc-700 flex items-center justify-center bg-zinc-950">

                            {/* Check Icon with Path Animation */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ccff00"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-check"
                            >
                                <path d="M20 6 9 17l-5-5" className="animate-[draw_2s_ease-in-out_infinite]" />
                            </svg>

                        </div>

                    </div>

                    {/* Decor - Search Icon bottom-right (Magnifying Glass) */}
                    <div className="absolute -bottom-3 -right-3 p-1.5 rounded-full bg-[#ccff00] shadow-md animate-[bounce_2s_infinite] [animation-delay:0.5s]">
                        <Search size={14} className="text-black" />
                    </div>

                </div>
            </div>

            <style jsx>{`
        .animate-\[draw_2s_ease-in-out_infinite\] {
           stroke-dasharray: 30;
           stroke-dashoffset: 30;
           animation: draw 2s ease-in-out infinite;
        }

        @keyframes draw {
            0% { stroke-dashoffset: 30; opacity: 0; }
            30% { stroke-dashoffset: 0; opacity: 1; }
            80% { stroke-dashoffset: 0; opacity: 1; }
            100% { stroke-dashoffset: -30; opacity: 0; }
        }
      `}</style>
        </div>
    );
}
