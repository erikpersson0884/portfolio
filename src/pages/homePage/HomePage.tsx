import { FC } from 'react';

import Hero from '@/components/hero/Hero';
import Expertise from '@/components/expertise/Expertise';
import Projects from '@/components/projects/Projects';
import Postcards from '@/components/postcards/Postcards';
import Skills from '@/components/skills/Skills';


const HomePage: FC = () => {
    return (
        <main className="page">
            <Hero />
            <Expertise />
            <Projects />
            <Postcards />
            <Skills />
        </main>
    );
};

export default HomePage;
