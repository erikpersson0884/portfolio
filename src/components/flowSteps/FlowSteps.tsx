import { FC } from 'react';
import './FlowSteps.css';
import type { Step } from '@/types/screenIt';


interface FlowStepsProps {
    steps: Step[];
    label: string;
}

const FlowSteps: FC<FlowStepsProps> = ({ steps, label }) => {
    return (
        <ol className="flow-steps" aria-label={label}>
            {steps.map((step) => (
                <li key={step.title} className={step.highlight ? 'flow-step flow-step-highlight' : 'flow-step'}>
                    <strong>{step.title}</strong>
                    <span>{step.text}</span>
                </li>
            ))}
        </ol>
    );
};

export default FlowSteps;
