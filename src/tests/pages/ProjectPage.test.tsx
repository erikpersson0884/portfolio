import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProjectPage from '@/pages/projectPage/ProjectPage';

vi.mock('@/data/caseStudies', () => ({
    caseStudies: {
        full: {
            tone: 'blue',
            year: '2024',
            title: 'Full Project',
            subtitle: 'A fully populated case study',
            tech: ['React', 'TypeScript', 'Vitest'],
            intro: 'This is the intro paragraph.',
            team: ['Alice', 'Bob'],
            role: ['Frontend', 'Design'],
            sections: [
                {
                    title: 'The Challenge',
                    text: 'Some descriptive text.',
                    highlight: { value: '42%', label: 'faster load time' },
                    items: ['First item', 'Second item'],
                    embed: { url: 'https://example.com/embed', title: 'Demo embed' },
                },
                {
                    title: 'Results & Impact!',
                    text: 'Second section text.',
                },
            ],
        },
        minimal: {
            tone: 'green',
            year: '2023',
            title: 'Minimal Project',
            subtitle: 'Only the basics',
            tech: ['Node'],
            intro: 'Minimal intro.',
            team: ['Solo'],
            role: ['Everything'],
            sections: [
                { title: 'Bare Section' },
                {
                    title: 'Empty Embed',
                    embed: { url: '', title: 'Should not render' },
                },
            ],
        },
    },
}));

const renderAt = (path: string) =>
    render(
        <MemoryRouter initialEntries={[path]}>
            <Routes>
                <Route path="/" element={<div>Home page</div>} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/project/:slug" element={<ProjectPage />} />
            </Routes>
        </MemoryRouter>,
    );

describe('ProjectPage', () => {
    describe('redirects', () => {
        it('redirects to home when the slug does not match a case study', () => {
            renderAt('/project/does-not-exist');

            expect(screen.getByText('Home page')).toBeInTheDocument();
            expect(screen.queryByRole('main')).not.toBeInTheDocument();
        });

        it('redirects to home when there is no slug param', () => {
            renderAt('/project');

            expect(screen.getByText('Home page')).toBeInTheDocument();
        });
    });

    describe('hero', () => {
        it('renders year, title, and subtitle', () => {
            renderAt('/project/full');

            expect(screen.getByText('2024')).toBeInTheDocument();
            expect(screen.getByRole('heading', { level: 1, name: 'Full Project' })).toBeInTheDocument();
            expect(screen.getByText('A fully populated case study')).toBeInTheDocument();
        });

        it('applies the tone class to the hero', () => {
            renderAt('/project/full');

            const hero = screen.getByRole('banner');
            expect(hero).toHaveClass('project-hero', 'project-hero-blue');
        });

        it('renders every technology in the tech list', () => {
            renderAt('/project/full');

            const list = screen.getByRole('list', { name: 'Technologies' });
            const items = within(list).getAllByRole('listitem');

            expect(items.map((li) => li.textContent)).toEqual(['React', 'TypeScript', 'Vitest']);
        });
    });

    describe('navigation', () => {
        it('renders a back link to the projects section on the home page', () => {
            renderAt('/project/full');

            const link = screen.getByRole('link', { name: /all projects/i });
            expect(link).toHaveAttribute('href', '/#projects');
            expect(link).toHaveClass('project-back');
        });
    });

    describe('intro and meta', () => {
        it('renders the intro paragraph', () => {
            renderAt('/project/full');

            expect(screen.getByText('This is the intro paragraph.')).toHaveClass('project-intro');
        });

        it('renders the team members', () => {
            renderAt('/project/full');

            const team = screen.getByRole('region', { name: 'Team' });
            const items = within(team).getAllByRole('listitem');

            expect(items.map((li) => li.textContent)).toEqual(['Alice', 'Bob']);
        });

        it('renders the role items', () => {
            renderAt('/project/full');

            const role = screen.getByRole('region', { name: 'My role' });
            const items = within(role).getAllByRole('listitem');

            expect(items.map((li) => li.textContent)).toEqual(['Frontend', 'Design']);
        });
    });

    describe('sections', () => {
        it('renders a labelled region with a heading for each section', () => {
            renderAt('/project/full');

            expect(screen.getByRole('region', { name: 'The Challenge' })).toBeInTheDocument();
            expect(screen.getByRole('region', { name: 'Results & Impact!' })).toBeInTheDocument();
        });

        it('generates a slugified heading id and links it via aria-labelledby', () => {
            renderAt('/project/full');

            const challenge = screen.getByRole('heading', { name: 'The Challenge' });
            expect(challenge).toHaveAttribute('id', 'project-the-challenge');

            const results = screen.getByRole('heading', { name: 'Results & Impact!' });
            expect(results).toHaveAttribute('id', 'project-results-impact-');

            const section = screen.getByRole('region', { name: 'The Challenge' });
            expect(section).toHaveAttribute('aria-labelledby', 'project-the-challenge');
        });

        it('renders section text', () => {
            renderAt('/project/full');

            expect(screen.getByText('Some descriptive text.')).toHaveClass('project-text');
        });

        it('renders the highlight value and label', () => {
            renderAt('/project/full');

            expect(screen.getByText('42%')).toHaveClass('project-highlight-value');
            expect(screen.getByText('faster load time')).toHaveClass('project-highlight-label');
        });

        it('renders section list items', () => {
            renderAt('/project/full');

            const section = screen.getByRole('region', { name: 'The Challenge' });
            const items = within(section).getAllByRole('listitem');

            expect(items.map((li) => li.textContent)).toEqual(['First item', 'Second item']);
        });

        it('renders the embed iframe with the correct attributes', () => {
            renderAt('/project/full');

            const iframe = screen.getByTitle('Demo embed');
            expect(iframe.tagName).toBe('IFRAME');
            expect(iframe).toHaveAttribute('src', 'https://example.com/embed');
            expect(iframe).toHaveAttribute('loading', 'lazy');
            expect(iframe).toHaveAttribute('allowfullscreen');
        });

        it('only renders optional content for sections that provide it', () => {
            renderAt('/project/full');

            const second = screen.getByRole('region', { name: 'Results & Impact!' });

            expect(within(second).getByText('Second section text.')).toBeInTheDocument();
            expect(within(second).queryByRole('list')).not.toBeInTheDocument();
            expect(second.querySelector('.project-highlight')).toBeNull();
            expect(second.querySelector('iframe')).toBeNull();
        });
    });

    describe('minimal case study', () => {
        it('renders a section with only a title', () => {
            renderAt('/project/minimal');

            const section = screen.getByRole('region', { name: 'Bare Section' });

            expect(section).toBeInTheDocument();
            expect(section.querySelector('.project-text')).toBeNull();
            expect(section.querySelector('.project-highlight')).toBeNull();
            expect(section.querySelector('.project-list')).toBeNull();
            expect(section.querySelector('iframe')).toBeNull();
        });

        it('does not render an iframe when the embed url is empty', () => {
            renderAt('/project/minimal');

            expect(screen.queryByTitle('Should not render')).not.toBeInTheDocument();
            expect(document.querySelector('iframe')).toBeNull();
        });

        it('applies the matching tone class', () => {
            renderAt('/project/minimal');

            expect(screen.getByRole('banner')).toHaveClass('project-hero-green');
        });
    });
});
