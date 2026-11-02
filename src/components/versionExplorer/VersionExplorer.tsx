import { FC, useState } from 'react';
import './VersionExplorer.css';
import type { AccentColor, Version } from '@/types/vevit';
import VersionMock from './VersionMock';


interface VersionExplorerProps {
    versions: Version[];
    accents: AccentColor[];
    accent: string;
    onAccentChange: (value: string) => void;
}

const VersionExplorer: FC<VersionExplorerProps> = ({ versions, accents, accent, onAccentChange }) => {
    const [index, setIndex] = useState(0);
    const version = versions[index];

    return (
        <div className="version-explorer">
            <div className="crank-wrap">
                <button
                    type="button"
                    className="crank"
                    onClick={() => setIndex((index + 1) % versions.length)}
                    aria-label="Turn the crank to see the next version"
                >
                    <svg viewBox="0 0 300 300" aria-hidden="true">
                        <circle className="crank-ring" cx="150" cy="150" r="130" />
                        <circle className="crank-hub" cx="150" cy="150" r="22" />
                        <g className="crank-handle" style={{ transform: `rotate(${(index * 360) / versions.length}deg)` }}>
                            <rect className="crank-arm" x="140" y="38" width="20" height="112" rx="10" />
                            <circle className="crank-knob" cx="150" cy="44" r="32" />
                            <text x="150" y="52" textAnchor="middle">{version.id}</text>
                        </g>
                    </svg>
                </button>
                <p className="hand crank-hint">turn the crank</p>
            </div>

            <div className="version-main">
                <div className="version-tabs" role="tablist" aria-label="Versions of vevIT">
                    {versions.map((v, i) => (
                        <button
                            key={v.id}
                            type="button"
                            role="tab"
                            aria-selected={i === index}
                            onClick={() => setIndex(i)}
                        >
                            {v.id}
                        </button>
                    ))}
                </div>

                <div className="version-window">
                    <div className="version-bar" aria-hidden="true"><i /><i /><i /><span>{version.address}</span></div>
                    <div className="version-screen">
                        {version.screenshot
                            ? <img src={version.screenshot.src} alt={version.screenshot.alt} />
                            : <VersionMock id={version.id} />}
                    </div>
                </div>

                <div className="version-caption" role="tabpanel" aria-live="polite">
                    <small>{version.when}</small>
                    <h3 className="hand">{version.id}: {version.title}</h3>
                    <p>{version.text}</p>
                </div>

                <div className="accent-picker">
                    <span>Page color, a nod to v2.1:</span>
                    {accents.map((color) => (
                        <button
                            key={color.value}
                            type="button"
                            style={{ backgroundColor: color.value }}
                            aria-label={`Use ${color.name} as page color`}
                            aria-pressed={color.value === accent}
                            onClick={() => onAccentChange(color.value)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VersionExplorer;
