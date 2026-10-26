import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StrecklistaPage from './StrecklistaPage';
import { strecklista } from '@/data/strecklista';

describe('StrecklistaPage', () => {
    const renderPage = () => render(<MemoryRouter><StrecklistaPage /></MemoryRouter>);

    it('shows the title and links back to the projects', () => {
        renderPage();

        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Strecklista');
        expect(screen.getByRole('link', { name: /All projects/ })).toHaveAttribute('href', '/#projects');
    });

    it('gives every image a description', () => {
        renderPage();

        for (const image of screen.getAllByRole('img')) {
            expect(image).toHaveAccessibleName();
        }
    });

    it('hides the measurement note and flow when they are empty', () => {
        strecklista.outcome.metricNote = '';
        renderPage();

        expect(screen.queryByText(/How it was measured/)).not.toBeInTheDocument();
    });
});
