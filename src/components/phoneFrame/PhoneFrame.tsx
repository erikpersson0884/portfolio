import { CSSProperties, FC } from 'react';
import './PhoneFrame.css';


interface PhoneFrameProps {
    src: string;
    alt: string;
    width?: number;
    tilt?: number;
    caption?: string;
}

const PhoneFrame: FC<PhoneFrameProps> = ({ src, alt, width = 220, tilt = 0, caption }) => {
    return (
        <figure
            className="phone-frame"
            style={{ '--w': `${width}px`, '--tilt': `${tilt}deg` } as CSSProperties}
        >
            <div className="phone-screen">
                <img src={src} alt={alt} loading="lazy" />
            </div>
            {caption && <figcaption className="hand">{caption}</figcaption>}
        </figure>
    );
};

export default PhoneFrame;
