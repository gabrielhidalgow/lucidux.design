
export function Ticker({ text = "INTELLIGENCE • DESIGN • SYNTHESIS • FUTURE •" }: { text?: string }) {
    return (
        <div className="w-full py-6 md:py-12 overflow-hidden border-y border-white/10 bg-black flex">
            <div className="flex whitespace-nowrap font-display text-4xl md:text-8xl font-bold text-white/10 uppercase animate-ticker">
                <span className="mr-6 md:mr-12">{text}</span>
                <span className="mr-6 md:mr-12">{text}</span>
                <span className="mr-6 md:mr-12">{text}</span>
                <span className="mr-6 md:mr-12">{text}</span>
                <span className="mr-6 md:mr-12">{text}</span>
                <span className="mr-6 md:mr-12">{text}</span>
            </div>
        </div>
    );
}
