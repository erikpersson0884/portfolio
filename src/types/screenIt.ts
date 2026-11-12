import type { ImageAsset } from '@/types/caseStudy';

export interface CaptionedShot extends ImageAsset {
    caption: string;
}

export interface Step {
    title: string;
    text: string;
    highlight?: boolean;
}

export interface GuideRow {
    title: string;
    text: string;
}

export interface FetchRule {
    shown: boolean;
    title: string;
    text: string;
}

export interface ScreenItStudy {
    title: string;
    subtitle: string;
    year: number;
    description: string;
    team: string[];
    role: string[];
    stack: string[];
    liveLabel: string;
    heroPosters: ImageAsset[];
    problem: { intro: string; points: string[] };
    research: { intro: string; needs: string[] };
    mvp: { intro: string; shots: CaptionedShot[] };
    testing: { intro: string; points: string[]; steps: Step[]; photo: CaptionedShot };
    beyond: { intro: string; rows: GuideRow[] };
    redesign: { intro: string; reason: string; shots: CaptionedShot[] };
    bar: { intro: string; points: string[]; photo: CaptionedShot };
    sync: { intro: string; steps: Step[]; rules: FetchRule[]; example: CaptionedShot };
    outcome: { ticker: string[]; text: string };
    reflection: string;
    /** Hidden while empty. */
    nextSteps: string[];
}
