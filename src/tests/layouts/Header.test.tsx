import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Header from '@/layouts/header/Header';

describe('Header', () => {
    it('renders the site identity and main navigation links', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>,
        );

        expect(screen.getByText('Erik Persson')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Erik Persson, home' })).toHaveAttribute(
            'href',
            '/',
        );

        const navigation = screen.getByRole('navigation', { name: 'Main' });
        expect(navigation).toContainElement(screen.getByRole('link', { name: 'Projects' }));
        expect(navigation).toContainElement(screen.getByRole('link', { name: 'Activities' }));
        expect(navigation).toContainElement(screen.getByRole('link', { name: 'Contact' }));
    });
});
