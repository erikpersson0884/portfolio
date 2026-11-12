import { useEffect, useState } from 'react';

/**
 * Index of the active slide, advancing every `intervalMs`.
 * Stands still for people who prefer reduced motion, and while `setPaused(true)` is active.
 */
export const useCarousel = (count: number, intervalMs: number) => {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (count < 2 || paused) return;
        if (typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const id = window.setInterval(() => setActive((index) => (index + 1) % count), intervalMs);
        return () => window.clearInterval(id);
    }, [count, intervalMs, paused]);

    return { active, setPaused };
};
