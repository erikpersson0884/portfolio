import { CSSProperties, FC } from 'react';
import './Postcards.css';
import { activities } from '@/data/portfolio';


const Postcards: FC = () => {
    return (
        <section className="section postcards" id="activities" aria-labelledby="activities-title">
            <h2 id="activities-title" className="section-title section-title-large hand">
                Postcards from student life
            </h2>

            <div className="postcards-list">
                {activities.map((activity) => (
                    <figure
                        className="postcard"
                        key={activity.name}
                        style={{
                            '--w': `${activity.width}px`,
                            '--tilt': `${activity.tilt}deg`,
                            '--ratio': activity.ratio,
                        } as CSSProperties}
                    >
                        <div className="postcard-photo">
                            <img src={activity.image} alt={`${activity.name}: photo`} loading="lazy" />
                            <figcaption className="hand">{activity.name}</figcaption>
                        </div>
                        <p className="postcard-text">{activity.text}</p>
                    </figure>
                ))}
            </div>
        </section>
    );
};

export default Postcards;
