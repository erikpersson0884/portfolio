import { FC } from 'react';
import './Projects.css';
import { projects } from '@/data/portfolio';


const Projects: FC = () => {
    return (
        <section className="section projects" id="projects" aria-labelledby="projects-title">
            <h2 id="projects-title" className="section-title hand">Projects</h2>

            <ul className="projects-list">
                {projects.map((project) => (
                    <li key={project.title}>
                        <a className={`project project-${project.tone}`} href={project.href}>
                            <span className="project-year">{project.year}</span>
                            <span className="project-title">{project.title}</span>
                            <span className="project-summary">{project.summary}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
