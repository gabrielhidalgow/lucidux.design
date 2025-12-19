"use client";

import { useEffect, useRef } from 'react';

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const moveCursor = (e: MouseEvent) => {
            cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        };

        const mediaQuery = window.matchMedia("(pointer: fine)");

        const handleLayoutChange = (e: MediaQueryListEvent | MediaQueryList) => {
            if (e.matches) {
                // Desktop/Mouse: Enable custom cursor
                window.addEventListener('mousemove', moveCursor);
                document.documentElement.style.cursor = 'none';
                document.body.style.cursor = 'none';
                if (cursor) cursor.style.display = 'block';
            } else {
                // Touch/Mobile: Disable custom cursor
                window.removeEventListener('mousemove', moveCursor);
                document.documentElement.style.cursor = '';
                document.body.style.cursor = '';
                if (cursor) cursor.style.display = 'none';
            }
        };

        // Initial check
        handleLayoutChange(mediaQuery);

        // Listen for resize/breakpoint changes
        mediaQuery.addEventListener('change', handleLayoutChange);

        return () => {
            mediaQuery.removeEventListener('change', handleLayoutChange);
            window.removeEventListener('mousemove', moveCursor);
            document.documentElement.style.cursor = '';
            document.body.style.cursor = '';
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-6 h-6 border border-accent rounded-full pointer-events-none z-[10000] mix-blend-difference"
            style={{
                // Start off-screen to avoid jumping
                transform: 'translate3d(-100px, -100px, 0)',
                display: 'none', // Managed by JS
            }}
        />
    );
}
