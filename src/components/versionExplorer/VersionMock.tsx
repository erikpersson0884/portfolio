import { FC } from 'react';
import type { VersionId } from '@/types/vevit';

// Small drawn illustrations of how each version looked.
// They are stand-ins: give a version a `screenshot` in data/vevit.ts to use a real image instead.

const vevs = [
    ['Alice vs Bob', '12:15'],
    ['Cecilia vs Dan', 'Tue'],
    ['Elin vs Filip', 'Thu'],
];

const VersionMock: FC<{ id: VersionId }> = ({ id }) => {
    switch (id) {
        case 'v1':
            return (
                <div className="vm vm-v1" aria-hidden="true">
                    <h4>vevIT</h4>
                    <p>Book a vev:</p>
                    <p>Who: <input readOnly tabIndex={-1} value="Neinei" /> When: <input readOnly tabIndex={-1} value="Friday" /> <button tabIndex={-1}>Submit</button></p>
                    <ul>{vevs.slice(0, 2).map(([n, t]) => <li key={n}>{n}, {t}</li>)}</ul>
                    <span className="vm-link">click here to see old vevs</span>
                </div>
            );
        case 'v1.5':
            return (
                <div className="vm vm-v15" aria-hidden="true">
                    <table>
                        <tbody>
                            <tr><th /><th>A: Challenger</th><th>B: Opponent</th><th>C: When</th></tr>
                            <tr><td>1</td><td>Alice</td><td>Bob</td><td>Today 12:15</td></tr>
                            <tr><td>2</td><td>Cecilia</td><td>Dan</td><td>Tue 17:00</td></tr>
                            <tr><td>3</td><td>Elin</td><td>Filip</td><td>Thu 13:00</td></tr>
                            <tr><td>4</td><td /><td /><td /></tr>
                        </tbody>
                    </table>
                </div>
            );
        case 'v2':
        case 'v2.1':
            return (
                <div className="vm vm-v2" aria-hidden="true">
                    <h4>vevIT</h4>
                    {vevs.map(([n, t]) => <div className="vm-row" key={n}><span>{n}</span><span>{t}</span></div>)}
                    <span className="vm-btn">Book a vev</span>
                    {id === 'v2.1' && (
                        <div className="vm-pick">Pick colors: <b /><b /><b /></div>
                    )}
                </div>
            );
        case 'v3':
            return (
                <div className="vm vm-v3" aria-hidden="true">
                    <h4>vevIT <span className="vm-tag">React</span></h4>
                    {vevs.map(([n, t]) => <div className="vm-row" key={n}><span>{n}</span><span>{t}</span></div>)}
                </div>
            );
        default:
            return (
                <div className="vm vm-v4" aria-hidden="true">
                    <div className="vm-phone">
                        <b>Upcoming vevs</b> <span className="vm-live">● live</span>
                        {vevs.map(([n]) => <div className="vm-row" key={n}><i />{n}</div>)}
                        <div className="vm-fab">Book a vev</div>
                    </div>
                    <div className="vm-phone vm-phone-2">
                        <b>Log in</b>
                        <div className="vm-row">Sign in with Gamma</div>
                        <div className="vm-row">Admin tools</div>
                    </div>
                </div>
            );
    }
};

export default VersionMock;
