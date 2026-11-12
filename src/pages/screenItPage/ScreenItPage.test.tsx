import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ScreenItPage from './ScreenItPage';
import { screenit } from '@/data/screenit';

describe('ScreenItPage', () => {
    const renderPage = () => render(<MemoryRouter><ScreenItPage /></MemoryRouter>);

    it('shows the title and links back to the projects', () => {
        renderPage();

        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('ScreenIT');
        expect(screen.getByRole('link', { name: /All projects/ })).toHaveAttribute('href', '/#projects');
    });

    it('gives every visible image a description', () => {
        renderPage();

        for (const image of screen.getAllByRole('img')) {
            expect(image).toHaveAccessibleName();
        }
    });

    it('lists the website fetch rules with their outcome in words', () => {
        renderPage();

        expect(screen.getAllByText('SHOWN')).toHaveLength(screenit.sync.rules.filter((rule) => rule.shown).length);
        expect(screen.getAllByText('SKIPPED')).toHaveLength(screenit.sync.rules.filter((rule) => !rule.shown).length);
    });

    it('hides the next steps card while there are none', () => {
        renderPage();

        expect(screen.queryByRole('complementary', { name: 'Next steps' })).not.toBeInTheDocument();
    });
});
