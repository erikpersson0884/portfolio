import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LoadingPage from '@/pages/loadingPage/LoadingPage';

describe('LoadingPage', () => {
    it('renders the default loading message and image', () => {
        render(<LoadingPage />);

        expect(screen.getByText('Laddar...')).toBeInTheDocument();
        expect(screen.getByRole('img', { name: 'Loading' })).toHaveAttribute(
            'height',
            '40',
        );
    });

    it('renders a custom loading message', () => {
        render(<LoadingPage message="Hämtar projekt..." />);

        expect(screen.getByText('Hämtar projekt...')).toBeInTheDocument();
        expect(screen.queryByText('Laddar...')).not.toBeInTheDocument();
    });
});
