import poster1 from '@/assets/screenit/poster-1.png';
import poster2 from '@/assets/screenit/poster-2.png';
import poster3 from '@/assets/screenit/poster-3.png';
import poster4 from '@/assets/screenit/poster-4.png';
import mvpUpload from '@/assets/screenit/mvp-upload.png';
import mvpGallery from '@/assets/screenit/mvp-gallery.png';
import mvpCarousel from '@/assets/screenit/mvp-carousel.png';
import oldTv from '@/assets/screenit/old-tv.jpg';
import popupUpload from '@/assets/screenit/popup-upload.png';
import popupYours from '@/assets/screenit/popup-yours.png';
import barTv from '@/assets/screenit/bar-tv.jpg';
import fetchedPoster from '@/assets/screenit/fetched-poster.png';
import type { ScreenItStudy } from '@/types/screenIt';

// Content for /projects/screenit. Images live in src/assets/screenit (see the README there).
// Search for TODO to find what still needs your input.

export const screenit: ScreenItStudy = {
    title: 'ScreenIT',
    subtitle: 'a digital event board',
    year: 2023,
    description:
        'ScreenIT is a digital announcement board for event posters. It gives event coordinators a simple way to upload announcements and gives students an easy way to discover what is happening through a rotating carousel.',
    team: ['Erik Persson'],
    role: ['Research', 'Design', 'Frontend', 'Backend', 'Installation'],
    stack: ['React', 'Vite', 'TypeScript', 'CSS', 'Node.js', 'Express', 'Raspberry Pi 5'],
    liveLabel: 'live above the bar',
    // TODO: replace the alt texts with a short description of each real poster
    heroPosters: [
        { src: poster1, alt: 'Event poster shown on the ScreenIT board' },
        { src: poster2, alt: 'A second event poster on the board' },
        { src: poster3, alt: 'A third event poster on the board' },
        { src: poster4, alt: 'A fourth event poster on the board' },
    ],

    problem: {
        intro:
            'The project started taking shape in spring 2023, when it became clear that existing communication channels were not getting event information in front of people. Physical notice boards were cluttered, the Slack news feed got flooded quickly, and event coordinators struggled to reach their audience.',
        points: [
            'Students regularly missed events',
            'Physical boards made it difficult to notice relevant posters',
            'Digital feeds got flooded easily and important information was lost',
            'Low visibility led to lower event attendance and engagement',
        ],
    },

    research: {
        intro:
            'I interviewed event coordinators to understand what a better solution would need to do. Most wanted a quick way to upload posters and preferred for the display to update automatically, without requiring someone to manage the screen manually.',
        needs: [
            'Uploading a poster needed to be quick and uncomplicated',
            'The display should rotate automatically',
            'The content should stay current without constant maintenance',
        ],
    },

    mvp: {
        intro:
            'The first version focused on the two core experiences needed to make the idea useful: an upload page for coordinators and a gallery page for attendees, with a rotating carousel for a shared screen.',
        shots: [
            { src: mvpUpload, alt: 'The MVP upload page for sharing event posters', caption: 'upload page' },
            { src: mvpGallery, alt: 'The MVP gallery page for browsing upcoming events', caption: 'gallery page' },
            { src: mvpCarousel, alt: 'The MVP rotating carousel for a shared screen', caption: 'rotating carousel' },
        ],
    },

    testing: {
        intro:
            'Once the MVP was ready, ScreenIT was installed on an old TV in the lunchroom. This made it possible to observe the board in a real environment and gather feedback from the people it was intended to serve. Attendees quickly started discovering events they would otherwise have missed.',
        points: [
            'The first screen made event information visible during everyday routines',
            'Positive feedback showed that the board improved event discovery',
        ],
        // TODO: check that these steps match how it really works
        steps: [
            { title: 'Coordinator', text: 'uploads a poster' },
            { title: 'ScreenIT', text: 'React + Express' },
            { title: 'Raspberry Pi 5', text: 'drives the screen', highlight: true },
            { title: 'Lunchroom TV', text: 'shows the carousel' },
        ],
        photo: { src: oldTv, alt: 'ScreenIT running on the old TV in the lunchroom', caption: 'the old TV, now the event board' },
    },

    beyond: {
        intro: 'Additional features made ScreenIT easier to operate as the number of users and posters grew.',
        rows: [
            { title: 'Admin panel', text: 'Managing user accounts and permissions' },
            { title: 'Head admin tools', text: 'Controlling user privileges' },
            { title: 'Event dashboard', text: 'Tracking upcoming posters and deadlines' },
            { title: 'Auto-delete', text: 'Outdated posters are removed to keep the board current' },
        ],
    },

    redesign: {
        intro:
            'After the first deployment I redesigned the app to use more popups: for uploading posters, for seeing the ones you have uploaded, and more.',
        reason:
            'I chose popups because jumping between different pages was messy. Having everything in one place made the interface easier to understand.',
        shots: [
            { src: popupUpload, alt: 'The upload popup shown on top of the gallery', caption: 'upload popup' },
            { src: popupYours, alt: 'A popup listing the posters you have uploaded', caption: 'your uploaded posters' },
        ],
    },

    bar: {
        intro: 'We installed a brand new TV over the bar area to make ScreenIT more visible, and moved over to it once it was installed.',
        points: ['The old lunchroom TV was taken down once the new one was up', 'Placed to make the board more visible'],
        photo: { src: barTv, alt: 'The new TV above the bar showing ScreenIT', caption: 'the new screen over the bar' },
    },

    sync: {
        intro: 'ScreenIT now fetches events from our webpage automatically and displays them on the board. It checks about once an hour.', // TODO: check the exact interval
        steps: [
            { title: 'Our website', text: 'event name, date and poster' },
            { title: 'ScreenIT', text: 'fetches about once an hour', highlight: true },
            { title: 'The screen', text: 'shows the posters' },
        ],
        rules: [
            { shown: true, title: 'Event with a poster', text: 'Name, date and poster are fetched' },
            { shown: false, title: 'No poster', text: 'Nothing to show, so it is skipped' },
            { shown: false, title: 'No event connected on the website', text: 'Skipped as well' },
        ],
        example: { src: fetchedPoster, alt: 'A poster fetched from the website, shown on the board', caption: 'a fetched poster' },
    },

    outcome: {
        ticker: [
            'Surfaced information that might otherwise have been missed',
            'Increased attendance and engagement',
            'Strengthened communication around events',
            'Many people found events they would not have known about',
            'Now on a brand new, more visible TV over the bar',
            'Events fetched automatically from our website',
        ],
        text: 'ScreenIT gave the community a central platform for event promotion. It surfaced information that might otherwise have been missed, increased attendance and engagement, and strengthened communication around events. The response was immediately positive, with many people saying they had found events they would not have known about otherwise.',
    },

    reflection:
        'This project reinforced the value of user-centered design and rapid iteration. Starting with coordinator interviews kept the MVP focused on a real communication problem, while installing it on a shared screen made the feedback concrete and actionable.',

    // TODO: add what comes next. The "next episode" card stays hidden while this list is empty.
    // (The old page listed "Explore analytics for tracking engagement trends".)
    nextSteps: [],
};
