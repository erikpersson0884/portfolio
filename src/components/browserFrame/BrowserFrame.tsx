import { FC } from 'react';
import './BrowserFrame.css';
import type { CaptionedShot } from '@/types/screenIt';


interface BrowserFrameProps {
    shot: CaptionedShot;
    url?: string;
}

const BrowserFrame: FC<BrowserFrameProps> = ({ shot, url = 'screenit' }) => {
    return (
        <figure className="browser-frame">
            <div className="browser-window">
                <div className="browser-bar" aria-hidden="true">
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                    <span className="browser-url">{url}</span>
                </div>
                <img src={shot.src} alt={shot.alt} loading="lazy" />
            </div>
            <figcaption className="hand">{shot.caption}</figcaption>
        </figure>
    );
};

export default BrowserFrame;
