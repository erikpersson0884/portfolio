import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
    it('shows the name and the main sections', () => {
        render(<HomePage />);

        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Erik Persson');
        for (const title of ['Projects', 'Skills and technologies']) {
            expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
        }
    });
});
