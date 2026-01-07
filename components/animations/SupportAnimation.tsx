import { MousePointer2 } from "lucide-react";

export function SupportAnimation() {
    return (
        <div className="relative w-full h-full flex items-center justify-center z-10">

            {/* Decorative Small Bubbles */}
            <div className="absolute bottom-[30%] left-[15%] w-4 h-4 bg-zinc-800 rounded-full animate-[float_5s_ease-in-out_infinite_0.5s]"></div>

            {/* Main Chat Bubble */}
            <div className="flex flex-col items-center gap-2 transform z-10 animate-[float_4s_ease-in-out_infinite]">
                <div className="relative">
                    {/* Main Glow */}
                    <div className="absolute -inset-2 bg-[#ccff00]/15 rounded-3xl blur-md"></div>

                    {/* Bubble Container */}
                    <div className="w-20 h-16 bg-zinc-900 rounded-t-2xl rounded-br-2xl rounded-bl-sm border border-[#ccff00]/50 shadow-[0_0_30px_-5px_rgba(204,255,0,0.25)] flex items-center justify-center gap-1.5 relative">

                        {/* Yellow Typing Dots - Custom Animation */}
                        <div className="w-2 h-2 bg-[#ccff00] rounded-full animate-[typing-bounce_1s_infinite] [animation-delay:0s]"></div>
                        <div className="w-2 h-2 bg-[#ccff00] rounded-full animate-[typing-bounce_1s_infinite] [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 bg-[#ccff00] rounded-full animate-[typing-bounce_1s_infinite] [animation-delay:0.4s]"></div>

                    </div>

                    {/* Extra Graphic Element: Cursor - Filled Yellow */}
                    <div className="absolute -bottom-4 -right-4 animate-[float_3s_ease-in-out_infinite_0.5s]">
                        <MousePointer2 className="text-[#ccff00] fill-[#ccff00]" size={24} />
                    </div>

                </div>
            </div>

            <style jsx>{`
        @keyframes typing-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
        </div>
    );
}
