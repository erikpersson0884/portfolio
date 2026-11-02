import { CSSProperties, FC, useState } from 'react';
import './VevitPage.css';
import { Link } from 'react-router-dom';
import { vevit as study } from '@/data/vevit';
import StickyNote from '@/components/stickyNote/StickyNote';
import PhoneFrame from '@/components/phoneFrame/PhoneFrame';
import VersionExplorer from '@/components/versionExplorer/VersionExplorer';


const VevitPage: FC = () => {
    const [accent, setAccent] = useState(study.accents[0].value);

    return (
        <main className="page vevit-page" style={{ '--accent': accent } as CSSProperties}>
            <Link className="vevit-back" to="/#projects">← All projects</Link>

            <header className="vevit-hero" aria-labelledby="vevit-title">
                <p className="hand vevit-eyebrow">case study · {study.period}</p>
                <h1 id="vevit-title" className="vevit-title">{study.title}</h1>
                <p className="hand vevit-subtitle">{study.subtitle}</p>
                <p className="vevit-description">{study.description}</p>

                <dl className="vevit-meta">
                    <dt>Team</dt>
                    <dd>{study.team}</dd>
                    <dt>Role</dt>
                    <dd>{study.role.join(' · ')}</dd>
                </dl>

                <ul className="vevit-chips" aria-label="Technologies">
                    {study.stack.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>
            </header>

            <section className="section vevit-explorer" aria-label="How vevIT changed between versions">
                <VersionExplorer
                    versions={study.versions}
                    accents={study.accents}
                    accent={accent}
                    onAccentChange={setAccent}
                />
            </section>

            <section className="section vevit-why" aria-labelledby="vevit-why-title">
                <h2 id="vevit-why-title" className="section-title hand">Why it exists</h2>
                <StickyNote title="The story" items={study.why} tone="paper" tilt={-1} />
            </section>

            <section className="section" aria-labelledby="vevit-notes-title">
                <h2 id="vevit-notes-title" className="section-title hand">Release notes</h2>
                <ol className="vevit-notes">
                    {study.releaseNotes.map((note) => (
                        <li key={note.version}>
                            <h3><span className="hand">{note.version}</span>{note.title}</h3>
                            <p>{note.text}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="section" aria-labelledby="vevit-did-title">
                <h2 id="vevit-did-title" className="section-title hand">What I did</h2>
                <ul className="vevit-skills">
                    {study.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </section>

            {study.finalScreens.length > 0 && (
                <section className="section" aria-labelledby="vevit-final-title">
                    <h2 id="vevit-final-title" className="section-title hand">The finished screens</h2>
                    <div className="vevit-screens">
                        {study.finalScreens.map((screen) => (
                            <PhoneFrame key={screen.caption} src={screen.src} alt={screen.alt} width={210} tilt={screen.tilt} caption={screen.caption} />
                        ))}
                    </div>
                </section>
            )}

            <section className="section" aria-labelledby="vevit-outcome-title">
                <h2 id="vevit-outcome-title" className="section-title hand">Outcome</h2>
                <div className="vevit-outcome">
                    <div className="vevit-badge">
                        <p className="vevit-badge-value">{study.outcome.value}</p>
                        <p className="vevit-badge-label">{study.outcome.label}</p>
                    </div>
                    <ul className="vevit-outcome-points">
                        {study.outcome.points.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                </div>

                <p className="vevit-links">
                    <a className="vevit-button" href={study.links.live}>Open the live site ↗</a>
                    <a className="vevit-button vevit-button-outline" href={study.links.code}>View the code ↗</a>
                </p>
            </section>

            <section className="section vevit-reflection">
                <StickyNote title="Reflection" items={[study.reflection]} tone="paper" tilt={1} />
            </section>
        </main>
    );
};

export default VevitPage;
