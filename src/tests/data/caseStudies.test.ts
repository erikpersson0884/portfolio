import { describe, expect, it } from 'vitest';
import { caseStudies } from '@/data/caseStudies';

describe('caseStudies', () => {
    it('contains the Strecklista case study with its required project details', () => {
        const strecklista = caseStudies.strecklista;

        expect(strecklista).toBeDefined();
        expect(strecklista.slug).toBe('strecklista');
        expect(strecklista.title).toBe('Strecklista');
        expect(strecklista.year).toBe(2025);
        expect(strecklista.team).toEqual(
            expect.arrayContaining(['Erik Persson', 'Charlotte Lindell']),
        );
        expect(strecklista.role.length).toBeGreaterThan(0);
        expect(strecklista.tech).toEqual(expect.arrayContaining(['React', 'Vite', 'CSS']));
        expect(strecklista.sections.length).toBeGreaterThan(0);
    });

    it('gives each section a title', () => {
        for (const section of caseStudies.strecklista.sections) {
            expect(section.title).toBeTruthy();
        }
    });
});
