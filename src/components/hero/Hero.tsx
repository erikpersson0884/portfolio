import { FC } from 'react';
import './Hero.css';
import { profile } from '@/data/portfolio';


const Hero: FC = () => {
    return (
        <section className="hero" id="top" aria-labelledby="hero-title">
            <div className="hero-text">
                <p className="hand hero-hello">Hello, I’m</p>
                <h1 id="hero-title" className="hero-title">Erik <br />Persson</h1>
                <p className="hero-role">{profile.role}</p>
            </div>

            <figure className="polaroid">
                <img src={profile.photo} alt={`Portrait of ${profile.name}`} width={260} height={260} />
                <figcaption className="hand">that’s me!</figcaption>
            </figure>
        </section>
    );
};

export default Hero;
