import { FC } from 'react';
import './Skills.css';
import { skills } from '@/data/portfolio';


const Skills: FC = () => {
    return (
        <section className="section skills" aria-labelledby="skills-title">
            <h2 id="skills-title" className="section-title hand">Skills and technologies</h2>

            <ul className="skills-list">
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
