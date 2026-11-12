import { FC } from 'react';
import './NoticeBoard.css';

// Decorative illustration of a cluttered physical notice board: x, y, width, height (%), colour, rotation
const posters: [number, number, number, number, string, number][] = [
    [6, 10, 34, 44, '#ff9aa2', -6], [28, 22, 30, 40, '#ffd166', 5], [46, 8, 34, 46, '#7ee0c3', -3],
    [62, 30, 32, 40, '#a5b4fc', 7], [14, 52, 36, 40, '#fbf8f1', 4], [40, 50, 30, 44, '#ff9aa2', -8],
    [68, 6, 26, 36, '#fbf8f1', 2], [52, 62, 34, 34, '#ffd166', -4],
];

const NoticeBoard: FC = () => {
    return (
        <figure className="art-figure art-tilt-left">
            <div className="notice-board" aria-hidden="true">
                {posters.map(([x, y, w, h, color, rotate]) => (
                    <div
                        className="notice-poster"
                        key={`${x}-${y}`}
                        style={{ left: `${x}%`, top: `${y}%`, width: `${w}%`, height: `${h}%`, backgroundColor: color, transform: `rotate(${rotate}deg)` }}
                    >
                        <span className="notice-pin" />
                        <span className="notice-line" />
                        <span className="notice-line notice-line-short" />
                    </div>
                ))}
            </div>
            <figcaption className="hand">the notice board</figcaption>
        </figure>
    );
};

export default NoticeBoard;
