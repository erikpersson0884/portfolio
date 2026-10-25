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
