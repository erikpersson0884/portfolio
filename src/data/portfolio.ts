import meImage from '@/assets/me.jpg';
import pritImage from '@/assets/prit.jpg';
import equalitImage from '@/assets/equalit.jpg';
import fikitImage from '@/assets/fikit.jpg';
import smurfImage from '@/assets/smurf.jpg';
import type { Activity, ExpertiseArea, Profile, Project } from '@/types/portfolio';

// All site content lives in this file. Search for TODO to find what still needs filling in.

export const profile: Profile = {
    name: 'Erik Persson',
    role: 'Software engineering student',
    photo: meImage,

    email: 'Erikpersson0884@gmail.com',
    github: 'https://github.com/erikpersson0884',
    linkedin: 'https://www.linkedin.com/in/erikpersson0884',
};

export const expertise: ExpertiseArea[] = [
    {
        title: 'Software Engineering',
        text: 'Experienced in developing scalable and efficient software solutions using modern programming languages and frameworks.',
    },
    {
        title: 'Fullstack Development',
        text: 'Proficient in both frontend and backend development, creating seamless user experiences and robust server-side applications.',
    },
    {
        title: 'UX/UI Design',
        text: 'Focusing on usability, user-centered design, and intuitive software experiences.',
    },
];

// TODO: add real links and one-line summaries for screenIT and vevIT
export const projects: Project[] = [
    { title: 'Strecklista', year: 2025, summary: 'Shared storage checkout system for student committees.', href: '/projects/strecklista', tone: 'sun' },
    { title: 'screenIT2', year: 2023, summary: 'Digital evnt board used by the IT student division Chalmers.', href: '#', tone: 'mint' },
    { title: 'vevIT', year: 2024, summary: 'A full-stack booking app, that lets students book vev in the Sandlådan.', href: '#', tone: 'rose' },
];

// TODO: replace with the original photos and re-check each ratio (image width / height)
export const activities: Activity[] = [
    {
        name: 'P.R.I.T.',
        image: pritImage,
        ratio: 1.84,
        width: 340,
        tilt: -3,
        text: 'Maintained the student premises and arranged pubs and other activities for the division members.',
    },
    {
        name: 'Equalit',
        image: equalitImage,
        ratio: 1.9,
        width: 340,
        tilt: 2.5,
        text: 'Promoted inclusive practices and supported initiatives to improve student well-being and collaboration.',
    },
    { name: 'Fikit', image: fikitImage, ratio: 2.0, width: 340, tilt: -2, text: 'Chairman of the IT divisions fika association, where we served swedish fika (coffee and baked treats) to students and kept the mood up with a Taylor Swift playlist.' },
    { name: 'Smurf', image: smurfImage, ratio: 0.69, width: 200, tilt: 3.5, text: 'Represented the student division as its mascot, the Smurf, welcoming new students during Mottagningen and Cortègen.' },
];

export const skills: string[] = [
    'Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Java', 'HTML5', 'CSS3', 'Vite', 'Git', 'Docker',
];
