import type { VevitStudy } from '@/types/vevit';

// Content for /projects/vevit.
// Search for TODO to find what still needs your input.
// To use real screenshots: put the images in src/assets/vevit, import them here,
// and add them to `finalScreens`, or to a version as `screenshot: { src, alt }`.

export const vevit: VevitStudy = {
    title: 'vevIT',
    subtitle: 'four versions of a booking app for duels',
    period: '2022–2025',
    description:
        'I designed, built and deployed a booking platform for “vevs”, the duels that Chalmers IT students challenge each other to in the Sandlådan. It began as a joke and a bad first version, and became a tested, containerised full-stack app that students use for real.',
    team: 'Erik Persson, with advice from the Chalmers IT community',
    role: ['Design', 'Frontend', 'Backend', 'Deployment'],
    stack: ['React', 'TypeScript', 'Vite', 'Express', 'Prisma', 'PostgreSQL', 'Docker'],

    // TODO: check the dates of v1.5, v2 and v3, they are estimates.
    versions: [
        {
            id: 'v1',
            title: 'The joke becomes a website',
            when: 'Summer 2022',
            address: 'localhost',
            text: 'Plain HTML, written with ChatGPT’s help before I knew web development. It worked as a proof of concept, but the code didn’t hold up.',
        },
        {
            id: 'v1.5',
            title: 'A spreadsheet saves the meeting',
            when: 'Autumn 2022',
            address: 'vev.chalmers.it',
            text: 'During the first section meeting of the year, heated chat debates kept pointing to vevIT. A quick page embedded a Google Sheet where people logged their vevs.',
        },
        {
            id: 'v2',
            title: 'Throw it out, start again',
            when: 'Late 2022',
            address: 'vev.chalmers.it',
            text: 'The v1 code was bad enough that I scrapped it and started over. It was built entirely using html, css and javascript, with node for the backend. This was the first version people used for real.',
        },
        {
            id: 'v2.1',
            title: 'Colors and Cookies',
            when: 'Moved to digIT’s server 21 Nov 2023',
            address: 'vevit.chalmers.it',
            text: 'A color picker let each visitor choose the site’s colors, and cookies remembered the theme and the user. It moved to vevit.chalmers.it on 21 November 2023.',
        },
        {
            id: 'v3',
            title: 'Rebuilt in React',
            when: '2024',
            address: 'vevit.chalmers.it',
            text: 'A rewrite in React that moved the app from hand-made pages to components. Increaising the number of features and making it easier to maintain. It also added mobile friendly design.',
        },
        {
            id: 'v4',
            title: 'The stable one',
            when: 'Deployed 16 Sept 2025',
            address: 'vevit.chalmers.it',
            text: 'A full-stack rewrite with Vite, TypeScript, Express, Prisma and PostgreSQL. It added Gamma login, real-time updates, admin tools, tests and a mobile-friendly design.',
        },
    ],

    accents: [
        { name: 'Sky', value: '#4dc3e6' },
        { name: 'Sun', value: '#ffd166' },
        { name: 'Mint', value: '#7ee0c3' },
        { name: 'Rose', value: '#ff9aa2' },
        { name: 'Lilac', value: '#b6a4ff' },
    ],

    why: [
        'Two newly elected members of the section’s fika committee couldn’t agree on who should get a post, so they settled it with a vev in the Sandlådan. One of them then started challenging everyone she knew, even her own chairman.',
        'Soon nobody could remember who had challenged whom. The job of the app: one shared place to see every vev, quick enough to use on a phone between lectures.',
    ],

    releaseNotes: [
        { version: 'v1', title: 'Starting without knowing how', text: 'Plain HTML with ChatGPT’s help. I had just started web developing for this exact project. I did not know what i was doing and could not for the life of me understand why 2 people couldnt book vevs on diferent computers. It proved the idea, and showed me that code I didn’t understand couldn’t grow.' },
        
        { version: 'v1.5', title: 'Letting users shape it', text: 'A student division meeting ran on a Google Sheet while the app was offline, which showed what people really needed. A fast, simple way to book vev with other people, anda way for people to see others bookings and have a good laught at them' },

        { version: 'v2', title: 'Rewriting early', text: 'I scrapped v1 and rebuilt from scratch. Rewriting while the app was small was cheaper than patching it for years.' },

        { version: 'v3', title: 'Moving to components', text: 'I rebuilt the frontend in React so the interface could be reused and maintained.' },

        { version: 'v4', title: 'Built to be taken over', text: 'By not i had gotten some more excpeirnce with web development. Seeing how cluttered and how many code smells v3 had I decided that once agian wit would need to be rebuilt, this time creating a stable ground, with good documentation so it would be easy to maintain and for other people to contribube. Sign-in through the section’s existing accounts (Gamma) with JWT sessions, a Prisma and PostgreSQL backend, Vitest tests, GitHub Actions and a one-command Docker setup. The people running the section change every year, so the next person can pick it up.' },
    ],

    skills: [
        'Product and UX design',
        'React and TypeScript frontend',
        'REST API with Express',
        'Database modelling with Prisma',
        'OAuth sign-in and JWT sessions',
        'Automated testing and CI',
        'Docker and deployment',
        'Working with real users and feedback',
    ],

    // TODO: add screenshots of the final app, e.g.
    // { src: homeScreen, alt: 'vevIT home page listing upcoming vevs', caption: 'browse', tilt: -3 },
    finalScreens: [],

    outcome: {
        value: 'v4',
        label: 'stable since 16 Sept 2025',
        // TODO: add a real number if you have one (users, bookings, vevs booked).
        points: [
            'Hosted on Chalmers IT’s own servers since November 2023',
            'Students use it to book vevs in the Sandlådan',
            'Open source, so anyone can implement features they want or fix bugs they find',
        ],
    },
    links: {
        live: 'https://vevit.chalmers.it',
        code: 'https://github.com/erikpersson0884/vevit-v4',
    },

    reflection:
        'vevIT taught me what it takes to keep a project alive: knowing when to rewrite, listening to the people who use it, and building it so someone else can take it over. It started with a first version I wasn’t proud of and ended as software I’d happily show to an employer.',
};
