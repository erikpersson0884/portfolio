import { CSSProperties, FC } from 'react';
import './StickyNote.css';


interface StickyNoteProps {
    title: string;
    items: string[];
    tone?: 'sun' | 'mint' | 'paper';
    tilt?: number;
}

const StickyNote: FC<StickyNoteProps> = ({ title, items, tone = 'sun', tilt = 0 }) => {
    return (
        <article
            className={`sticky-note sticky-note-${tone}`}
            style={{ '--tilt': `${tilt}deg` } as CSSProperties}
        >
            <span className="tape" aria-hidden="true" />
            <h3 className="hand">{title}</h3>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </article>
    );
};

export default StickyNote;
