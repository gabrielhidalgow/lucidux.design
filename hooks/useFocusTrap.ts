"use client";

import { useEffect, useRef, RefObject } from "react";

/**
 * Custom hook to trap focus within a container element.
 * Useful for modals, dialogs, and other overlay components.
 */
export function useFocusTrap<T extends HTMLElement>(
    isActive: boolean
): RefObject<T | null> {
    const containerRef = useRef<T>(null);
    const previousActiveElement = useRef<Element | null>(null);

    useEffect(() => {
        if (!isActive || !containerRef.current) return;

        // Store the currently focused element to restore later
        previousActiveElement.current = document.activeElement;

        const container = containerRef.current;

        // Get all focusable elements within the container
        const getFocusableElements = (): HTMLElement[] => {
            const focusableSelectors = [
                'button:not([disabled])',
                'a[href]',
                'input:not([disabled])',
                'select:not([disabled])',
                'textarea:not([disabled])',
                '[tabindex]:not([tabindex="-1"])',
            ].join(', ');

            return Array.from(container.querySelectorAll(focusableSelectors));
        };

        // Focus the first focusable element
        const focusableElements = getFocusableElements();
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key !== 'Tab') return;

            const focusableElements = getFocusableElements();
            if (focusableElements.length === 0) return;

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            // Shift + Tab: Move focus to last element if on first
            if (event.shiftKey) {
                if (document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                }
            } else {
                // Tab: Move focus to first element if on last
                if (document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);

            // Restore focus to the previously focused element
            if (previousActiveElement.current instanceof HTMLElement) {
                previousActiveElement.current.focus();
            }
        };
    }, [isActive]);

    return containerRef;
}
