import { FC } from 'react';
import './ProgrammeGuide.css';
import type { GuideRow } from '@/types/screenIt';


interface ProgrammeGuideProps {
    rows: GuideRow[];
    caption: string;
}

const ProgrammeGuide: FC<ProgrammeGuideProps> = ({ rows, caption }) => {
    return (
        <div className="programme-guide">
            <div className="guide-bar" aria-hidden="true">
                <span>PROGRAMME GUIDE</span>
                <span className="guide-now">● NOW SHOWING</span>
            </div>
            <table>
                <caption className="visually-hidden">{caption}</caption>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={row.title}>
                            <th scope="row"><span aria-hidden="true">CH </span>{index + 1}</th>
                            <td className="guide-title">{row.title}</td>
                            <td className="guide-text">{row.text}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProgrammeGuide;
