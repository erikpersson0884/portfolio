import type { CaptionedImage, ImageAsset } from '@/types/caseStudy';

export type VersionId = 'v1' | 'v1.5' | 'v2' | 'v2.1' | 'v3' | 'v4';

export interface Version {
    id: VersionId;
    /** Short name of the release, e.g. "Colors and Cookies". */
    title: string;
    when: string;
    /** Address shown in the little browser bar. */
    address: string;
    text: string;
    /** A real screenshot. When set it replaces the drawn illustration of this version. */
    screenshot?: ImageAsset;
}

export interface ReleaseNote {
    version: VersionId;
    title: string;
    text: string;
}

export interface AccentColor {
    name: string;
    value: string;
}

export interface VevitStudy {
    title: string;
    subtitle: string;
    period: string;
    description: string;
    team: string;
    role: string[];
    stack: string[];
    versions: Version[];
    accents: AccentColor[];
    why: string[];
    releaseNotes: ReleaseNote[];
    skills: string[];
    /** Real screenshots of the final app. The section is hidden when empty. */
    finalScreens: CaptionedImage[];
    outcome: { value: string; label: string; points: string[] };
    links: { live: string; code: string };
    reflection: string;
}
