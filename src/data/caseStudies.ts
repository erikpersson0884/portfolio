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
};