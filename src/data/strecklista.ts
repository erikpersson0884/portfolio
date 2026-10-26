import heroApp from '@/assets/strecklista/hero-app.png';
import sketchGrid from '@/assets/strecklista/sketch-grid.png';
import sketchSummary from '@/assets/strecklista/sketch-summary.png';
import prototypeCover from '@/assets/strecklista/prototype-cover.png';
import beforeShop from '@/assets/strecklista/before-shop.png';
import afterShop from '@/assets/strecklista/after-shop.png';
import beforeAdmin from '@/assets/strecklista/before-admin.png';
import afterAdmin from '@/assets/strecklista/after-admin.png';
import finalPick from '@/assets/strecklista/final-pick.png';
import finalConfirm from '@/assets/strecklista/final-confirm.png';
import finalAdmin from '@/assets/strecklista/final-admin.png';
import finalHistory from '@/assets/strecklista/final-history.png';
import type { CaseStudy } from '@/types/caseStudy';

// Content for /projects/strecklista. Images live in src/assets/strecklista (see the README there).
// Search for TODO to find what still needs your input.

export const strecklista: CaseStudy = {
    title: 'Strecklista',
    subtitle: 'Shared storage checkout system',
    year: 2025,
    description:
        'Designed and developed a shared storage checkout system to replace slow, manual payment processes used by student committees. The system reduces checkout time and simplifies inventory management for frequently rotating users.',
    team: ['Erik Persson', 'Charlotte Lindell'],
    role: ['User research', 'UI/UX in Figma', 'Frontend'],
    stack: ['React', 'Vite', 'CSS', 'Figma'],
    heroImage: { src: heroApp, alt: 'The Strecklista app showing a grid of items with prices and stock' },

    problem: [
        'Payments were handled manually (Swish or written notes)',
        'Checkout was slow and inconsistent',
        'Prices and inventory were difficult to track',
        'Frequent member turnover made systems unreliable',
    ],
    process: [
        'Interviewed 5+ committee members to find checkout bottlenecks',
        'Found that checkout speed was the top priority',
        'Identified confusion around pricing tiers and inventory updates',
        'Sketched multiple concepts focused on fast item selection',
    ],
    insights: [
        'Checkout time is the highest priority',
        'Different pricing tiers are required (members, alumni, guests)',
        'Inventory and price updates need to be easy to manage',
        'Manual tracking creates unnecessary administrative work',
    ],

    sketches: [
        { src: sketchGrid, alt: 'Hand-drawn sketch of the item grid', caption: 'first sketch: item grid', tilt: -3 },
        { src: sketchSummary, alt: 'Hand-drawn sketch of the order summary', caption: 'sketch: order summary', tilt: 2.5 },
    ],
    prototype: {
        url: 'https://www.figma.com/proto/M6GjmsmabYRZ545rig7LFp/Str%C3%A4cklista-innan-rewrite?content-scaling=fixed&kind=proto&node-id=1-2&page-id=0%3A1&scaling=scale-down&starting-point-node-id=1%3A2',
        cover: { src: prototypeCover, alt: 'First screen of the Figma prototype' },
        points: [
            'Fast item selection with minimal steps',
            'Pricing clearly visible to reduce confusion',
            'Checkout flow reduced to the essentials',
            'Designed for quick use in busy, real-world places',
        ],
    },

    redesign: {
        intro:
            'After testing the Figma mockup, the interface was refined for usability, consistency and visual clarity, and made adaptable to different committees and pricing tiers.',
        pairs: [
            {
                before: { src: beforeShop, alt: 'Old shop screen with a small checkmark button' },
                after: { src: afterShop, alt: 'New shop screen with a search bar and a pay button' },
                // TODO: check these match what really changed
                changes: [
                    'Search added to find items fast',
                    'Larger prices and a clearer hierarchy',
                    'One clear pay button instead of a small checkmark',
                ],
            },
            {
                before: { src: beforeAdmin, alt: 'Old admin screen made of small form fields' },
                after: { src: afterAdmin, alt: 'New admin screen as a simple list with edit and delete' },
                changes: [
                    'Form fields replaced by a simple list',
                    'Edit and delete in one tap',
                    'A clear call to action to add items',
                ],
            },
        ],
    },

    finalScreens: [
        { src: finalPick, alt: 'Final app: picking items', caption: 'pick items', tilt: -3 },
        { src: finalConfirm, alt: 'Final app: confirming an order', caption: 'confirm', tilt: 2 },
        { src: finalAdmin, alt: 'Final app: managing stock and prices', caption: 'manage stock', tilt: -2 },
        { src: finalHistory, alt: 'Final app: transaction history', caption: 'see history', tilt: 3.5 },
    ],

    outcome: {
        metric: '55%',
        metricLabel: 'faster checkout flow, with fewer steps',
        metricNote: '', // TODO: one line on how you measured it, e.g. "Steps per checkout, counted in the old and new flow."
        points: [
            'Users could quickly understand pricing and inventory',
            'Reduced reliance on manual tracking',
            'Transaction history became trackable and manageable',
        ],
        flow: ['Pick items', 'Confirm', 'Done'], // TODO: make sure this matches the real flow, or use []
    },

    reflection:
        'This project strengthened my ability to design for real-world constraints and balance usability with flexibility in dynamic environments. It also highlighted the importance of user research and iterative design in creating effective solutions that meet user needs.',
};
