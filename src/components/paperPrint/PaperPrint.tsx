import { CSSProperties, FC } from 'react';
import './PaperPrint.css';


interface PaperPrintProps {
    src: string;
    alt: string;
    caption: string;
    tilt?: number;
}

const PaperPrint: FC<PaperPrintProps> = ({ src, alt, caption, tilt = 0 }) => {
    return (
        <figure className="paper-print" style={{ '--tilt': `${tilt}deg` } as CSSProperties}>
            <span className="tape" aria-hidden="true" />
            <img src={src} alt={alt} loading="lazy" />
            <figcaption className="hand">{caption}</figcaption>
        </figure>
    );
};

export default PaperPrint;
