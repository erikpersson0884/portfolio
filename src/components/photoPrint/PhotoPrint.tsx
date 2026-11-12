import { CSSProperties, FC } from 'react';
import './PhotoPrint.css';
import type { CaptionedShot } from '@/types/screenIt';


interface PhotoPrintProps {
    shot: CaptionedShot;
    /** Image width divided by height. */
    ratio?: number;
    tilt?: number;
}

const PhotoPrint: FC<PhotoPrintProps> = ({ shot, ratio = 4 / 3, tilt = 0 }) => {
    return (
        <figure
            className="photo-print"
            style={{ '--tilt': `${tilt}deg`, '--ratio': ratio } as CSSProperties}
        >
            <span className="tape" aria-hidden="true" />
            <img src={shot.src} alt={shot.alt} loading="lazy" />
            <figcaption className="hand">{shot.caption}</figcaption>
        </figure>
    );
};

export default PhotoPrint;
