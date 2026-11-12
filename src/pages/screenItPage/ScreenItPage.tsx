import { FC } from 'react';
import './ScreenItPage.css';
import { Link } from 'react-router-dom';
import { screenit as study } from '@/data/screenit';
import TvFrame from '@/components/tvFrame/TvFrame';
import BrowserFrame from '@/components/browserFrame/BrowserFrame';
import FlowSteps from '@/components/flowSteps/FlowSteps';
import ProgrammeGuide from '@/components/programmeGuide/ProgrammeGuide';
import Ticker from '@/components/ticker/Ticker';
import PhotoPrint from '@/components/photoPrint/PhotoPrint';
import NoticeBoard from '@/components/screenItArt/NoticeBoard';
import ChatFeed from '@/components/screenItArt/ChatFeed';


const ScreenItPage: FC = () => {
    return (
        <main className="page screenit">
            <Link className="si-back" to="/#projects">← All projects</Link>

            <section className="si-hero" aria-labelledby="si-title">
                <div className="si-hero-text">
                    <p className="hand si-eyebrow">case study · {study.year}</p>
                    <h1 id="si-title" className="si-title">{study.title}</h1>
                    <p className="hand si-subtitle">{study.subtitle}</p>
                    <p className="si-description">{study.description}</p>

                    <dl className="si-meta">
                        <dt>Team</dt>
                        <dd>{study.team.join(', ')}</dd>
                        <dt>Role</dt>
                        <dd>{study.role.join(' · ')}</dd>
                    </dl>

                    <ul className="si-chips">
                        {study.stack.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                    <p className="si-live">● {study.liveLabel}</p>
                </div>

                <TvFrame slides={study.heroPosters} tilt={-2} />
            </section>

            <section className="section" aria-labelledby="si-problem">
                <h2 id="si-problem" className="section-title hand">The problem</h2>
                <div className="si-split">
                    <div className="si-split-text">
                        <p className="si-lead">{study.problem.intro}</p>
                        <ul className="si-bullets">
                            {study.problem.points.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </div>
                    <NoticeBoard />
                    <ChatFeed />
                </div>
            </section>

            <section className="section" aria-labelledby="si-research">
                <h2 id="si-research" className="section-title hand">User research</h2>
                <div className="si-split si-split-center">
                    <p className="si-lead si-grow">{study.research.intro}</p>
                    <ol className="si-needs">
                        {study.research.needs.map((need) => (
                            <li key={need}>{need}</li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="section" aria-labelledby="si-mvp">
                <h2 id="si-mvp" className="section-title hand">MVP</h2>
                <p className="si-intro">{study.mvp.intro}</p>
                <div className="si-frames">
                    {study.mvp.shots.map((shot, index) => (
                        <div className="si-frame-item" key={shot.caption}>
                            {index > 0 && <span className="hand si-arrow" aria-hidden="true">→</span>}
                            <BrowserFrame shot={shot} url={`screenit/${shot.caption.split(' ')[0]}`} />
                        </div>
                    ))}
                </div>
            </section>

            <section className="section" aria-labelledby="si-testing">
                <h2 id="si-testing" className="section-title hand">From prototype to real-world testing</h2>
                <div className="si-split">
                    <PhotoPrint shot={study.testing.photo} tilt={-2.5} />
                    <div className="si-split-text">
                        <p className="si-lead">{study.testing.intro}</p>
                        <ul className="si-bullets">
                            {study.testing.points.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                        <FlowSteps steps={study.testing.steps} label="How a poster reaches the screen" />
                    </div>
                </div>
            </section>

            <section className="section" aria-labelledby="si-beyond">
                <h2 id="si-beyond" className="section-title hand">Beyond the MVP</h2>
                <p className="si-intro">{study.beyond.intro}</p>
                <ProgrammeGuide rows={study.beyond.rows} caption="Features added after the MVP" />
            </section>

            <section className="section" aria-labelledby="si-redesign">
                <h2 id="si-redesign" className="section-title hand">The redesign: popups</h2>
                <p className="si-lead">{study.redesign.intro}</p>
                <p className="si-lead si-reason">{study.redesign.reason}</p>
                <div className="si-frames">
                    {study.redesign.shots.map((shot) => (
                        <BrowserFrame key={shot.caption} shot={shot} />
                    ))}
                </div>
            </section>

            <section className="section" aria-labelledby="si-bar">
                <h2 id="si-bar" className="section-title hand">A new screen over the bar</h2>
                <div className="si-split si-split-center">
                    <div className="si-split-text">
                        <p className="si-lead">{study.bar.intro}</p>
                        <ul className="si-bullets">
                            {study.bar.points.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </div>
                    <PhotoPrint shot={study.bar.photo} tilt={2} />
                </div>
            </section>

            <section className="section" aria-labelledby="si-sync">
                <h2 id="si-sync" className="section-title hand">Events from the website, automatically</h2>
                <p className="si-lead">{study.sync.intro}</p>
                <FlowSteps steps={study.sync.steps} label="How events get from the website to the screen" />

                <div className="si-split si-split-center si-sync-row">
                    <ul className="si-rules">
                        {study.sync.rules.map((rule) => (
                            <li key={rule.title} className={rule.shown ? 'si-rule' : 'si-rule si-rule-skipped'}>
                                <span className="si-rule-icon" aria-hidden="true">{rule.shown ? '✓' : '✕'}</span>
                                <div>
                                    <strong>{rule.title}</strong>
                                    <span>{rule.text}</span>
                                </div>
                                <span className="si-rule-state">{rule.shown ? 'SHOWN' : 'SKIPPED'}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="si-example">
                        <TvFrame slides={[{ src: study.sync.example.src, alt: study.sync.example.alt }]} label="From the website" />
                        <p className="hand">{study.sync.example.caption}</p>
                    </div>
                </div>
            </section>

            <section className="section" aria-labelledby="si-outcome">
                <h2 id="si-outcome" className="section-title hand">Outcome</h2>
                <Ticker items={study.outcome.ticker} />
                <div className="si-note si-note-outcome">
                    <span className="tape" aria-hidden="true" />
                    <p>{study.outcome.text}</p>
                </div>
            </section>

            <section className="section si-end" aria-labelledby="si-reflection">
                <div className="si-note">
                    <span className="tape" aria-hidden="true" />
                    <h2 id="si-reflection" className="hand">Reflection</h2>
                    <p>{study.reflection}</p>
                </div>
                {study.nextSteps.length > 0 && (
                    <aside className="si-next" aria-label="Next steps">
                        <span className="si-next-tag">NEXT EPISODE</span>
                        <ul>
                            {study.nextSteps.map((step) => (
                                <li key={step}>{step}</li>
                            ))}
                        </ul>
                    </aside>
                )}
            </section>
        </main>
    );
};

export default ScreenItPage;
