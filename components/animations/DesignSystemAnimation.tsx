"use client";

import { Check, Download, X, Plus, Home } from "lucide-react";

export function DesignSystemAnimation() {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(204,255,0,0.08)_0%,transparent_70%)]" />

      {/* Main container with floating elements */}
      <div className="relative w-full max-w-[500px] h-full">

        {/* Typography Card - Center left */}
        <div className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 animate-[float_4s_ease-in-out_infinite]">
          <div className="bg-white rounded-xl p-4 shadow-lg w-24 md:w-28">
            <p className="text-[10px] text-gray-500 mb-1">Primary typeface</p>
            <p className="text-3xl md:text-4xl font-bold text-gray-900">Aa</p>
          </div>
        </div>

        {/* Button variants - Top center */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 md:top-8 flex flex-col gap-2 animate-[float_5s_ease-in-out_infinite]" style={{ animationDelay: "-1s" }}>
          <div className="px-4 py-1.5 rounded-full border-2 border-[#d4a952] text-[#d4a952] text-xs font-medium bg-transparent">
            Button
          </div>
          <div className="px-4 py-1.5 rounded-full bg-[#22c55e] text-white text-xs font-medium">
            Button
          </div>
        </div>

        {/* Icon buttons cluster - Top right */}
        <div className="absolute right-4 md:right-8 top-12 md:top-16 flex items-center gap-1 animate-[float_4.5s_ease-in-out_infinite]" style={{ animationDelay: "-0.5s" }}>
          <div className="w-8 h-8 rounded-full bg-[#22c55e] flex items-center justify-center">
            <Download size={14} className="text-white" />
          </div>
          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
            <X size={12} className="text-gray-600" />
          </div>
          <div className="w-6 h-6 rounded-full bg-[#ccff00] flex items-center justify-center">
            <Plus size={12} className="text-gray-900" />
          </div>
        </div>

        {/* Color swatch card - Center */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 animate-[float_3.5s_ease-in-out_infinite]" style={{ animationDelay: "-2s" }}>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg w-20 md:w-24">
            <div className="h-16 md:h-20 bg-[#5b8def]" />
            <div className="p-2 text-center">
              <p className="text-[10px] text-gray-600">Secondary</p>
            </div>
          </div>
        </div>

        {/* Primary button card - Right center */}
        <div className="absolute right-0 md:right-4 top-1/2 -translate-y-1/4 animate-[float_4s_ease-in-out_infinite]" style={{ animationDelay: "-1.5s" }}>
          <div className="bg-[#5b8def] rounded-xl p-3 w-16 md:w-20">
            <p className="text-[10px] text-white/80 mb-2">Primary</p>
          </div>
        </div>

        {/* Checkboxes - Bottom left */}
        <div className="absolute left-4 md:left-12 bottom-12 md:bottom-16 flex flex-col gap-2 animate-[float_4.5s_ease-in-out_infinite]" style={{ animationDelay: "-0.8s" }}>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#22c55e] flex items-center justify-center">
              <Check size={12} className="text-white" />
            </div>
            <span className="text-xs text-gray-400">Checkbox</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded border-2 border-gray-300 bg-white" />
            <span className="text-xs text-gray-400">Checkbox</span>
          </div>
        </div>

        {/* Heading hierarchy - Bottom right */}
        <div className="absolute right-8 md:right-16 bottom-8 md:bottom-12 text-right animate-[float_5s_ease-in-out_infinite]" style={{ animationDelay: "-2.5s" }}>
          <p className="text-lg md:text-xl font-bold text-white">Heading 1</p>
          <p className="text-base md:text-lg font-semibold text-gray-300">Heading 2</p>
          <p className="text-sm md:text-base font-medium text-gray-400">Heading 3</p>
          <p className="text-xs text-gray-500">Main Body</p>
          <p className="text-xs text-[#5b8def] underline">Link</p>
        </div>

        {/* Navigation icon - Bottom center */}
        <div className="absolute left-1/3 bottom-4 md:bottom-8 animate-[float_4s_ease-in-out_infinite]" style={{ animationDelay: "-3s" }}>
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md">
            <Home size={18} className="text-[#5b8def]" />
          </div>
        </div>

        {/* Small accent dots */}
        <div className="absolute left-1/4 top-1/4 flex gap-1 animate-[float_3s_ease-in-out_infinite]">
          <div className="w-3 h-3 rounded-full bg-[#5b8def]" />
          <div className="w-3 h-3 rounded-full bg-[#5b8def]" />
        </div>

        {/* CTA button element */}
        <div className="absolute left-8 md:left-16 top-1/3 animate-[float_4.5s_ease-in-out_infinite]" style={{ animationDelay: "-1.2s" }}>
          <div className="flex items-center gap-1.5 bg-[#5b8def] text-white text-[10px] px-2.5 py-1.5 rounded-md">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
            Get in touch
          </div>
        </div>

        {/* Edit icon */}
        <div className="absolute right-1/4 top-8 md:top-12 animate-[float_5s_ease-in-out_infinite]" style={{ animationDelay: "-0.3s" }}>
          <div className="w-8 h-8 rounded-lg bg-[#5b8def] flex items-center justify-center rotate-12">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}
