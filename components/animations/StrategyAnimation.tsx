import { TrendingUp, BarChart3 } from "lucide-react";

export function StrategyAnimation() {
    return (
        <div className="relative w-full h-full flex items-center justify-center gap-8 z-10">

            {/* Background/Floating Element */}
            <div className="absolute top-[20%] left-[20%] w-12 h-12 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center shadow-xl animate-[float_4s_ease-in-out_infinite]">
                <div className="absolute -inset-1 bg-[#ccff00]/5 rounded-2xl blur-md"></div>
                <BarChart3 className="text-zinc-500" size={20} />
            </div>

            {/* Main Graph Card */}
            <div className="flex flex-col items-center gap-2 transform z-10 animate-[float_5s_ease-in-out_infinite_1s]">
                <div className="relative">
                    {/* Main Glow */}
                    <div className="absolute -inset-2 bg-[#ccff00]/15 rounded-xl blur-md animate-[pulse_3s_ease-in-out_infinite]"></div>

                    {/* Main Card Body */}
                    <div className="w-20 h-24 bg-zinc-900 rounded-lg border border-[#ccff00]/50 shadow-[0_0_30px_-5px_rgba(204,255,0,0.25)] flex items-end justify-center gap-1.5 pb-4 px-3 relative">

                        {/* Grid Lines */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 flex flex-col justify-between p-2 pointer-events-none">
                            <div className="w-full h-[1px] bg-white"></div>
                            <div className="w-full h-[1px] bg-white"></div>
                            <div className="w-full h-[1px] bg-white"></div>
                            <div className="w-full h-[1px] bg-white"></div>
                        </div>

                        {/* Bar 1 (Static) */}
                        <div className="w-3 bg-zinc-700/50 rounded-t-sm" style={{ height: "40%" }}></div>
                        {/* Bar 2 (Static) */}
                        <div className="w-3 bg-zinc-600/50 rounded-t-sm" style={{ height: "60%" }}></div>
                        {/* Bar 3 (Animated) */}
                        <div className="w-3 bg-[#ccff00] rounded-t-sm animate-[grow_3s_ease-in-out_infinite]" style={{ height: "85%" }}></div>

                    </div>

                    {/* Trending Up Icon */}
                    <div className="absolute -top-3 -right-3 p-1.5 rounded-full bg-[#ccff00] shadow-md animate-[bounce_2s_infinite]">
                        <TrendingUp size={14} className="text-black" />
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes grow {
           0% { height: 40%; }
           30% { height: 85%; }
           85% { height: 85%; }
           100% { height: 40%; }
        }
      `}</style>
        </div>
    );
}
