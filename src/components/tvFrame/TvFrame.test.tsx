import { act, render, screen } from '@testing-library/react';
import TvFrame from './TvFrame';

const slides = [
    { src: 'a.png', alt: 'Poster A' },
    { src: 'b.png', alt: 'Poster B' },
];

describe('TvFrame', () => {
    beforeEach(() => { vi.useFakeTimers(); });
    afterEach(() => { vi.useRealTimers(); });

    it('shows one poster at a time and rotates', () => {
        render(<TvFrame slides={slides} intervalMs={1000} />);
        expect(screen.getByRole('img', { name: 'Poster A' })).toBeInTheDocument();
        expect(screen.queryByRole('img', { name: 'Poster B' })).not.toBeInTheDocument();

        act(() => { vi.advanceTimersByTime(1000); });
        expect(screen.getByRole('img', { name: 'Poster B' })).toBeInTheDocument();
        expect(screen.queryByRole('img', { name: 'Poster A' })).not.toBeInTheDocument();
    });
});
