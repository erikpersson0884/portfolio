import { act, renderHook } from '@testing-library/react';
import { useCarousel } from './useCarousel';

describe('useCarousel', () => {
    beforeEach(() => { vi.useFakeTimers(); });
    afterEach(() => { vi.useRealTimers(); });

    it('advances and wraps around', () => {
        const { result } = renderHook(() => useCarousel(3, 1000));
        expect(result.current.active).toBe(0);

        act(() => { vi.advanceTimersByTime(1000); });
        expect(result.current.active).toBe(1);

        act(() => { vi.advanceTimersByTime(2000); });
        expect(result.current.active).toBe(0);
    });

    it('stands still while paused', () => {
        const { result } = renderHook(() => useCarousel(3, 1000));
        act(() => { result.current.setPaused(true); });
        act(() => { vi.advanceTimersByTime(5000); });

        expect(result.current.active).toBe(0);
    });

    it('does not move with a single slide', () => {
        const { result } = renderHook(() => useCarousel(1, 1000));
        act(() => { vi.advanceTimersByTime(5000); });

        expect(result.current.active).toBe(0);
    });
});
