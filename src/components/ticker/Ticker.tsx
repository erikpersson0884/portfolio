import { FC } from 'react';
import './Ticker.css';


interface TickerProps {
    items: string[];
}

const Ticker: FC<TickerProps> = ({ items }) => {
    return (
        <div className="ticker">
            {/* Screen readers get a normal list, the scrolling copy is decoration */}
            <ul className="visually-hidden">
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <div className="ticker-track" aria-hidden="true">
                {[0, 1].map((copy) => (
                    <div className={`ticker-copy ${copy === 1 ? 'ticker-copy-repeat' : ''}`} key={copy}>
                        {items.map((item) => (
                            <span key={item}>{item}<span className="ticker-mark">✦</span></span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ticker;
