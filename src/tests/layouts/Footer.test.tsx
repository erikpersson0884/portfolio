import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Footer from '@/layouts/footer/Footer';
import { profile } from '@/data/portfolio';

describe('Footer', () => {
    it('renders contact details and social links', () => {
        render(<Footer />);

        expect(screen.getByRole('heading', { name: 'Say hello' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: profile.email })).toHaveAttribute(
            'href',
            `mailto:${profile.email}`,
        );
        expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
            'href',
            profile.github,
        );
        expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
            'href',
            profile.linkedin,
        );
    });

    it('renders the current year and profile name in the copyright notice', () => {
        render(<Footer />);

        expect(
            screen.getByText(`© ${new Date().getFullYear()} ${profile.name}`),
        ).toBeInTheDocument();
    });
});
