import type { CaseStudy } from '@/types/portfolio';

// Long-form project pages. Each entry is reachable at /projects/<slug>.
// A project card links here by setting href: '/projects/<slug>' in portfolio.ts.

export const caseStudies: Record<string, CaseStudy> = {
    strecklista: {
        slug: 'strecklista',
        title: 'Strecklista',
        subtitle: 'Shared storage checkout system',
        year: 2025,
        tone: 'sun',
        intro: 'Designed and developed a shared storage checkout system to replace slow, manual payment processes used by student committees. The system reduces checkout time and simplifies inventory management for frequently rotating users.',
        team: ['Erik Persson', 'Charlotte Lindell'],
        role: [
            'Conducted user interviews and defined key requirements',
            'Designed UI/UX in Figma based on user insights',
            'Developed frontend using React and Vite',
        ],
        tech: ['React', 'Vite', 'CSS'],
        sections: [
            {
                title: 'The problem',
                items: [
                    'Payments were handled manually (Swish or written notes)',
                    'Checkout was slow and inconsistent',
                    'Prices and inventory were difficult to track',
                    'Frequent member turnover made systems unreliable',
                ],
            },
            {
                title: 'Process',
                items: [
                    'Interviewed 5+ committee members to identify checkout bottlenecks',
                    'Found that checkout speed was the top priority',
                    'Identified confusion around pricing tiers and inventory updates',
                    'Sketched multiple concepts focusing on fast item selection',
                ],
            },
            {
                title: 'Key insights',
                items: [
                    'Checkout time is the highest priority',
                    'Different pricing tiers are required (members, alumni, guests)',
                    'Inventory and price updates need to be easy to manage',
                    'Manual tracking creates unnecessary administrative work',
                ],
            },
            {
                title: 'Figma mockup',
                text: 'You can try the prototype below.',
                items: [
                    'Prioritized fast item selection with minimal steps',
                    'Made pricing clearly visible to reduce confusion',
                    'Reduced checkout flow to the essential actions only',
                    'Designed for quick interactions in busy, real-world environments',
                ],
                // TODO: paste the Figma embed link (Share > Get embed code > the src="https://embed.figma.com/..." URL)
                embed: { title: 'Strecklista Figma prototype', url: '' },
            },
            {
                title: 'Re-design',
                text: 'Based on feedback from the Figma mockup and user testing, the interface was refined to improve usability, consistency, and visual clarity. The goal was to make checkout faster and more intuitive while keeping the system adaptable for different committees and pricing tiers.',
                items: [
                    'Simplified layout to reduce cognitive load',
                    'Improved color hierarchy for better readability',
                    'Added clearer navigation and feedback during checkout',
                    'Made the system adaptable to different pricing tiers',
                    'Resulted in a faster and more intuitive checkout experience with reduced confusion around pricing',
                    'Final design was well-received by users and ready for development',
                ],
            },
            {
                title: 'Outcome',
                highlight: { value: '55%', label: 'faster checkout flow with fewer steps' },
                items: [
                    'Users could quickly understand pricing and inventory',
                    'Reduced reliance on manual tracking',
                    'Transaction history became trackable and manageable',
                ],
            },
            {
                title: 'Reflection',
                text: 'This project strengthened my ability to design for real-world constraints and balance usability with flexibility in dynamic environments. It also highlighted the importance of user research and iterative design in creating effective solutions that meet user needs.',
            },
        ],
    },
    screenit: {
        slug: 'screenit',
        title: 'ScreenIT',
        subtitle: 'A digital event board',
        year: 2023,
        tone: 'mint',
        intro: 'ScreenIT is a digital announcement board for event posters. It gives event coordinators a simple way to upload announcements and gives student an easy way to discover what is happening through a rotating carousel.',
        team: ['Erik Persson'],
        role: [
            'Interviewed event coordinators to understand their communication needs',
            'Designed and developed the upload and gallery experience',
            'Built the application with React, Vite, CSS, Typescript, Node, and Express',
            'Installed and tested the board on shared lunchroom screens',
        ],
        tech: ['React', 'CSS', 'Typescript', 'Node.js', 'Express', 'Raspberry Pi 5'],
        sections: [
            {
                title: 'The problem',
                text: 'The project started taking shape in spring 2023, when it became clear that existing communication channels were not getting event information in front of people. Physical notice boards were cluttered, slack news feed got flooded quickly, and event coordinators struggled to reach their audience.',
                items: [
                    'Students regularly missed events',
                    'Physical boards made it difficult to notice relevant posters',
                    'Digital feeds got flooded easily and important information was lost',
                    'Low visibility led to lower event attendance and engagement',
                ],
            },
            {
                title: 'User research',
                text: 'I interviewed event coordinators to understand what a better solution would need to do. Most wanted a quick way to upload posters and preferred for the display to update automatically, without requiring someone to manage the screen manually.',
                items: [
                    'Uploading a poster needed to be quick and uncomplicated',
                    'The display should rotate automatically',
                    'The content should stay current without constant maintenance',
                ],
            },
            {
                title: 'MVP',
                text: 'The first version focused on the two core experiences needed to make the idea useful: an upload page for coordinators and a gallery page for attendees.',
                items: [
                    'Upload page for sharing event posters',
                    'Gallery page for browsing upcoming events',
                    'Rotating carousel for automatic presentation on a shared screen',
                ],
            },
            {
                title: 'From prototype to real-world testing',
                text: 'Once the MVP was ready, ScreenIT was installed on a old tv in the lunchroom. This made it possible to observe the board in a real environment and gather feedback from the people it was intended to serve. Attendees quickly started discovering events they would otherwise have missed.',
                items: [
                    'The first screen made event information visible during everyday routines',
                    'Positive feedback showed that the board improved event discovery',
                ],
            },
            {
                title: 'Beyond the MVP',
                text: 'Additional features made ScreenIT easier to operate as the number of users and posters grew.',
                items: [
                    'Admin panel for managing user accounts and permissions',
                    'Head admin tools for controlling user privileges',
                    'Event dashboard for tracking upcoming posters and deadlines',
                    'Automatic deletion of outdated posters to keep the board current',
                ],
            },
            {
                title: 'Outcome',
                text: 'ScreenIT gave the community a central platform for event promotion. It surfaced information that might otherwise have been missed, increased attendance and engagement, and strengthened communication around events. The response was immediately positive, with many people saying they had found events they would not have known about otherwise.',
            },
            {
                title: 'Reflection and next steps',
                text: 'This project reinforced the value of user-centered design and rapid iteration. Starting with coordinator interviews kept the MVP focused on a real communication problem, while installing it on a shared screen made the feedback concrete and actionable.',
                items: [
                    'Integrate ScreenIT with the IT division website so poster updates can be automated',
                    'Explore analytics for tracking engagement trends',
                ],
            },
        ],
    },
};