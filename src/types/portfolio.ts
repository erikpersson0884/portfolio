export interface Profile {
    name: string;
    role: string;
    photo: string;
    email: string;
    github: string;
    linkedin: string;
}

export interface ExpertiseArea {
    title: string;
    text: string;
}

export type ProjectTone = 'sun' | 'mint' | 'rose';

export interface Project {
    title: string;
    year: number;
    summary: string;
    href: string;
    tone: ProjectTone;
}

export interface Activity {
    name: string;
    image: string;
    /** Image width divided by height. */
    ratio: number;
    /** Card width in px. */
    width: number;
    /** Rotation in degrees. */
    tilt: number;
    text: string;
}


export interface CaseStudySection {
    title: string;
    text?: string;
    items?: string[];
    /** A big number with a label, shown above the list. */
    highlight?: { value: string; label: string };
    /** An embedded prototype, e.g. a Figma embed link. */
    embed?: { title: string; url: string };
}

export interface CaseStudy {
    /** Used in the URL: /projects/<slug>. */
    slug: string;
    title: string;
    subtitle: string;
    year: number;
    tone: ProjectTone;
    intro: string;
    team: string[];
    role: string[];
    tech: string[];
    sections: CaseStudySection[];
}