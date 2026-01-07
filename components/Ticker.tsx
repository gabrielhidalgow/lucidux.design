
export function Ticker({ text = "CONVERT • CLARITY • SPEED • SCALE •" }: { text?: string }) {
    return (
        <div className="relative w-full py-6 md:py-12 overflow-hidden bg-[var(--color-background)] flex">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-foreground)]/10 to-transparent" />
            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-foreground)]/10 to-transparent" />
            <div className="flex whitespace-nowrap font-display text-4xl md:text-8xl font-bold bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-950 bg-[length:50%_100%] bg-clip-text text-transparent uppercase animate-ticker transform-gpu select-none">
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
