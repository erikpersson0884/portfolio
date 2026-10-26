export interface ImageAsset {
    src: string;
    /** Describe what the image shows, for screen readers. */
    alt: string;
}

export interface CaptionedImage extends ImageAsset {
    caption: string;
    /** Rotation in degrees. */
    tilt: number;
}

export interface BeforeAfterPair {
    before: ImageAsset;
    after: ImageAsset;
    changes: string[];
}

export interface CaseStudy {
    title: string;
    subtitle: string;
    year: number;
    description: string;
    team: string[];
    role: string[];
    stack: string[];
    heroImage: ImageAsset;
    problem: string[];
    process: string[];
    insights: string[];
    sketches: CaptionedImage[];
    prototype: {
        url: string;
        cover: ImageAsset;
        points: string[];
    };
    redesign: {
        intro: string;
        pairs: BeforeAfterPair[];
    };
    finalScreens: CaptionedImage[];
    outcome: {
        metric: string;
        metricLabel: string;
        /** One line on how the metric was measured. Hidden when empty. */
        metricNote: string;
        points: string[];
        /** Steps of the checkout flow. Hidden when empty. */
        flow: string[];
    };
    reflection: string;
}
