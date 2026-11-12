import { CSSProperties, FC } from 'react';
import './TvFrame.css';
import { useCarousel } from '@/hooks/useCarousel';
import type { ImageAsset } from '@/types/caseStudy';


interface TvFrameProps {
    slides: ImageAsset[];
    label?: string;
    tilt?: number;
    intervalMs?: number;
}

const TvFrame: FC<TvFrameProps> = ({ slides, label = 'ScreenIT', tilt = 0, intervalMs = 3000 }) => {
    const { active, setPaused } = useCarousel(slides.length, intervalMs);

    return (
        <figure
            className="tv-frame"
            style={{ '--tilt': `${tilt}deg` } as CSSProperties}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <span className="tv-antenna tv-antenna-left" aria-hidden="true" />
            <span className="tv-antenna tv-antenna-right" aria-hidden="true" />

            <div className="tv-body">
                <div className="tv-screen">
                    {slides.map((slide, index) => (
                        <img
                            key={slide.src}
                            className={`tv-slide ${index === active ? 'tv-slide-active' : ''}`}
                            src={slide.src}
                            alt={slide.alt}
                            aria-hidden={index === active ? undefined : true}
                        />
                    ))}
                    <span className="tv-label" aria-hidden="true">{label}</span>
                    {slides.length > 1 && (
                        <span className="tv-dots" aria-hidden="true">
                            {slides.map((slide, index) => (
                                <span key={slide.src} className={index === active ? 'tv-dot tv-dot-active' : 'tv-dot'} />
                            ))}
                        </span>
                    )}
                </div>

                <div className="tv-controls" aria-hidden="true">
                    <span className="tv-knob" />
                    <span className="tv-knob" />
                    <span className="tv-speaker" />
                </div>
            </div>

            <div className="tv-feet" aria-hidden="true"><span /><span /></div>
        </figure>
    );
};

export default TvFrame;
