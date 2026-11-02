import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import VevitPage from './VevitPage';
import { vevit } from '@/data/vevit';

describe('VevitPage', () => {
    const renderPage = () => render(<MemoryRouter><VevitPage /></MemoryRouter>);

    it('shows the title and links back to the projects', () => {
        renderPage();

        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('vevIT');
        expect(screen.getByRole('link', { name: /All projects/ })).toHaveAttribute('href', '/#projects');
    });

    it('starts on the first version and moves on when the crank is turned', () => {
        renderPage();

        expect(screen.getByRole('heading', { level: 3, name: new RegExp(vevit.versions[0].title) })).toBeInTheDocument();

        fireEvent.click(screen.getByRole('button', { name: /Turn the crank/ }));

        expect(screen.getByRole('heading', { level: 3, name: new RegExp(vevit.versions[1].title) })).toBeInTheDocument();
        expect(screen.getByRole('tab', { name: vevit.versions[1].id })).toHaveAttribute('aria-selected', 'true');
    });

    it('jumps to a version when its tab is clicked', () => {
        renderPage();

        fireEvent.click(screen.getByRole('tab', { name: 'v4' }));

        expect(screen.getByRole('heading', { level: 3, name: /The stable one/ })).toBeInTheDocument();
    });

    it('changes the page color', () => {
        renderPage();

        fireEvent.click(screen.getByRole('button', { name: /Use Rose as page color/ }));

        expect(screen.getByRole('main')).toHaveStyle({ '--accent': '#ff9aa2' });
    });

    it('gives every image a description', () => {
        renderPage();

        for (const image of screen.queryAllByRole('img')) {
            expect(image).toHaveAccessibleName();
        }
    });

    it('hides the finished screens when there are none', () => {
        const screens = vevit.finalScreens;
        vevit.finalScreens = [];
        renderPage();

        expect(screen.queryByText('The finished screens')).not.toBeInTheDocument();
        vevit.finalScreens = screens;
    });
});
