import { FC } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import './ProjectPage.css';
import { caseStudies } from '@/data/caseStudies';


const toId = (title: string) => `project-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

const ProjectPage: FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const study = slug ? caseStudies[slug] : undefined;

    if (!study) return <Navigate to="/" replace />;

    return (
        <main className="page project-page">
            <Link className="project-back" to="/#projects">← All projects</Link>

            <header className={`project-hero project-hero-${study.tone}`}>
                <p className="project-hero-year">{study.year}</p>
                <h1 className="project-hero-title">{study.title}</h1>
                <p className="project-hero-subtitle">{study.subtitle}</p>

                <ul className="project-tech" aria-label="Technologies">
                    {study.tech.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>
            </header>

            <p className="project-intro">{study.intro}</p>

            <div className="project-meta">
                <section className="project-meta-item" aria-labelledby="project-team">
                    <h2 id="project-team">Team</h2>
                    <ul>
                        {study.team.map((member) => (
                            <li key={member}>{member}</li>
                        ))}
                    </ul>
                </section>

                <section className="project-meta-item" aria-labelledby="project-role">
                    <h2 id="project-role">My role</h2>
                    <ul>
                        {study.role.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
            </div>

            {study.sections.map((section) => (
                <section className="section project-section" key={section.title} aria-labelledby={toId(section.title)}>
                    <h2 id={toId(section.title)} className="section-title hand">{section.title}</h2>

                    {section.text && <p className="project-text">{section.text}</p>}

                    {section.highlight && (
                        <p className="project-highlight">
                            <span className="project-highlight-value hand">{section.highlight.value}</span>
                            <span className="project-highlight-label">{section.highlight.label}</span>
                        </p>
                    )}

                    {section.items && (
                        <ul className="project-list">
                            {section.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    )}

                    {section.embed?.url && (
                        <div className="project-embed">
                            <iframe src={section.embed.url} title={section.embed.title} loading="lazy" allowFullScreen />
                        </div>
                    )}
                </section>
            ))}
        </main>
    );
};

export default ProjectPage;