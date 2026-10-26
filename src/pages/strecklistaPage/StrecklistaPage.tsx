import { FC, Fragment } from 'react';
import './StrecklistaPage.css';
import { Link } from 'react-router-dom';
import { strecklista as study } from '@/data/strecklista';
import PhoneFrame from '@/components/phoneFrame/PhoneFrame';
import StickyNote from '@/components/stickyNote/StickyNote';
import PaperPrint from '@/components/paperPrint/PaperPrint';


const StrecklistaPage: FC = () => {
    return (
        <main className="page case-study">
            <Link className="case-back" to="/#projects">← All projects</Link>

            <section className="case-hero" aria-labelledby="case-title">
                <div className="case-hero-text">
                    <p className="hand case-eyebrow">case study · {study.year}</p>
                    <h1 id="case-title" className="case-title">{study.title}</h1>
                    <p className="hand case-subtitle">{study.subtitle}</p>
                    <p className="case-description">{study.description}</p>

                    <dl className="case-meta">
                        <dt>Team</dt>
                        <dd>{study.team.join(', ')}</dd>
                        <dt>Role</dt>
                        <dd>{study.role.join(' · ')}</dd>
                    </dl>

                    <ul className="chip-list">
                        {study.stack.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                </div>

                <PhoneFrame src={study.heroImage.src} alt={study.heroImage.alt} width={250} tilt={4} />
            </section>

            <section className="section case-notes">
                <StickyNote title="The problem" items={study.problem} tone="sun" tilt={-1.5} />
                <StickyNote title="The process" items={study.process} tone="mint" tilt={1.2} />
            </section>

            <section className="section" aria-labelledby="insights-title">
                <h2 id="insights-title" className="section-title section-title-large hand">What I learned from the interviews</h2>
                <ol className="insights">
                    {study.insights.map((insight, index) => (
                        <li key={insight}>
                            <span className="hand insight-number">0{index + 1}</span>
                            <p>{insight}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="section" aria-labelledby="prototype-title">
                <h2 id="prototype-title" className="section-title section-title-large hand">From paper to prototype</h2>
                <div className="prototype-row">
                    {study.sketches.map((sketch) => (
                        <PaperPrint key={sketch.caption} {...sketch} />
                    ))}

                    <div className="prototype-info">
                        <PhoneFrame src={study.prototype.cover.src} alt={study.prototype.cover.alt} width={200} />
                        <div>
                            <h3 className="hand">Try the prototype</h3>
                            <ul>
                                {study.prototype.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                            <a className="button-link" href={study.prototype.url}>Open in Figma ↗</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" aria-labelledby="redesign-title">
                <h2 id="redesign-title" className="section-title section-title-large hand">Re-design: before and after</h2>
                <p className="case-intro">{study.redesign.intro}</p>

                {study.redesign.pairs.map((pair) => (
                    <div className="pair" key={pair.after.src}>
                        <PhoneFrame src={pair.before.src} alt={pair.before.alt} width={190} tilt={-2} caption="before" />
                        <span className="hand pair-arrow" aria-hidden="true">→</span>
                        <PhoneFrame src={pair.after.src} alt={pair.after.alt} width={190} tilt={2} caption="after" />
                        <div className="pair-changes">
                            <h3 className="hand">What changed</h3>
                            <ul>
                                {pair.changes.map((change) => (
                                    <li key={change}>{change}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </section>

            <section className="section" aria-labelledby="final-title">
                <h2 id="final-title" className="section-title section-title-large hand">The finished screens</h2>
                <div className="final-screens">
                    {study.finalScreens.map((screen) => (
                        <PhoneFrame key={screen.caption} src={screen.src} alt={screen.alt} width={210} tilt={screen.tilt} caption={screen.caption} />
                    ))}
                </div>
            </section>

            <section className="section" aria-labelledby="outcome-title">
                <h2 id="outcome-title" className="section-title section-title-large hand">Outcome</h2>
                <div className="outcome">
                    <div className="metric">
                        <p className="metric-value">{study.outcome.metric}</p>
                        <p className="metric-label">{study.outcome.metricLabel}</p>
                    </div>
                    <ul className="outcome-points">
                        {study.outcome.points.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                </div>

                {study.outcome.metricNote && <p className="metric-note">How it was measured: {study.outcome.metricNote}</p>}

                {study.outcome.flow.length > 0 && (
                    <ol className="flow" aria-label="Checkout flow">
                        {study.outcome.flow.map((step, index) => (
                            <Fragment key={step}>
                                {index > 0 && <li className="flow-arrow hand" aria-hidden="true">→</li>}
                                <li>{step}</li>
                            </Fragment>
                        ))}
                    </ol>
                )}
            </section>

            <section className="section reflection">
                <StickyNote title="Reflection" items={[study.reflection]} tone="paper" tilt={-1} />
            </section>
        </main>
    );
};

export default StrecklistaPage;
