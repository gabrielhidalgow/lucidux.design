import { Eye } from "lucide-react";

export function ExpertEyeAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center gap-8 z-10">

      {/* Main Card Stack Container */}
      <div className="relative flex items-center justify-center animate-[float_4s_ease-in-out_infinite]">

        {/* Card Behind 2 */}
        <div className="absolute top-0 w-20 h-24 bg-zinc-800/50 rounded-lg border border-white/5 transform scale-90 translate-y-3 -z-20"></div>

        {/* Card Behind 1 */}
        <div className="absolute top-0 w-20 h-24 bg-zinc-800/80 rounded-lg border border-white/10 transform scale-95 translate-y-1.5 -z-10"></div>

        {/* Main Card (Center) */}
        <div className="relative z-10">
          {/* Main Glow */}
          <div className="absolute -inset-2 bg-[var(--color-accent)]/15 rounded-xl blur-md animate-[pulse_2s_ease-in-out_infinite]"></div>

          <div className="w-20 h-24 bg-zinc-900 rounded-lg border border-[var(--color-accent)]/50 shadow-[0_0_30px_-5px_rgba(var(--accent-rgb),0.25)] flex flex-col items-center justify-center gap-1.5 relative">
            <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-[var(--color-background)]">
              {/* Eye Icon with Blink Animation */}
              <Eye size={20} className="animate-[blink_2.5s_infinite]" />
            </div>
            <div className="w-10 h-1.5 bg-zinc-700 rounded-full"></div>

          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 48%, 52%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.1); }
        }
      `}</style>
    </div>
  );
}
