import { FC } from 'react';
import './Expertise.css';
import { expertise } from '@/data/portfolio';


const Expertise: FC = () => {
    return (
        <section className="section expertise" aria-labelledby="expertise-title">
            <h2 id="expertise-title" className="section-title hand">What I do</h2>

            <div className="expertise-grid">
                {expertise.map((area) => (
                    <article className="expertise-item" key={area.title}>
                        <h3>{area.title}</h3>
                        <p>{area.text}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Expertise;
