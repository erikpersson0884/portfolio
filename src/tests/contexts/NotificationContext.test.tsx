import { ReactNode } from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act, render, renderHook, screen } from '@testing-library/react';
import defaultExport, { NotificationProvider, useNotificationContext } from '@/contexts/NotificationContext';

const NOTIFICATION_DURATION = 3_000;

const wrapper = ({ children }: { children: ReactNode }) => (
    <NotificationProvider>{children}</NotificationProvider>
);

const setup = () => renderHook(() => useNotificationContext(), { wrapper });

describe('NotificationContext', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.restoreAllMocks();
    });

    describe('useNotificationContext', () => {
        it('throws when used outside a NotificationProvider', () => {
            // React logs the caught error; keep test output clean.
            vi.spyOn(console, 'error').mockImplementation(() => {});

            expect(() => renderHook(() => useNotificationContext())).toThrow(
                'useNotification must be used inside provider',
            );
        });

        it('is also available as the default export', () => {
            expect(defaultExport).toBe(useNotificationContext);
        });

        it('exposes a notify function', () => {
            const { result } = setup();

            expect(typeof result.current.notify).toBe('function');
        });
    });

    describe('NotificationProvider', () => {
        it('renders its children', () => {
            render(
                <NotificationProvider>
                    <p>Child content</p>
                </NotificationProvider>,
            );

            expect(screen.getByText('Child content')).toBeInTheDocument();
        });

        it('renders an empty notification container initially', () => {
            setup();

            const container = document.querySelector('.notification-container');

            expect(container).toBeInTheDocument();
            expect(container).toBeEmptyDOMElement();
        });
    });

    describe('notify', () => {
        it('shows the message inside the notification container', () => {
            const { result } = setup();

            act(() => result.current.notify('Saved!'));

            const popup = screen.getByText('Saved!');
            expect(popup).toBeInTheDocument();
            expect(popup).toHaveClass('notification-popup');
            expect(popup.parentElement).toHaveClass('notification-container');
        });

        it('defaults to the "info" type', () => {
            const { result } = setup();

            act(() => result.current.notify('Heads up'));

            expect(screen.getByText('Heads up')).toHaveClass('notification-popup', 'info');
        });

        it.each(['success', 'error', 'info'] as const)('applies the "%s" type as a class', (type) => {
            const { result } = setup();

            act(() => result.current.notify('Message', type));

            expect(screen.getByText('Message')).toHaveClass('notification-popup', type);
        });

        it('applies a custom color as the background', () => {
            const { result } = setup();

            act(() => result.current.notify('Colourful', 'info', 'rgb(255, 0, 0)'));

            expect(screen.getByText('Colourful')).toHaveStyle({ backgroundColor: 'rgb(255, 0, 0)' });
        });

        it('does not set an inline style when no color is given', () => {
            const { result } = setup();

            act(() => result.current.notify('Plain'));

            expect(screen.getByText('Plain')).not.toHaveAttribute('style');
        });
    });

    describe('auto-dismiss', () => {
        it('keeps the notification visible until the duration has elapsed', () => {
            const { result } = setup();

            act(() => result.current.notify('Still here'));
            act(() => {
                vi.advanceTimersByTime(NOTIFICATION_DURATION - 1);
            });

            expect(screen.getByText('Still here')).toBeInTheDocument();
        });

        it('removes the notification after 3 seconds', () => {
            const { result } = setup();

            act(() => result.current.notify('Gone soon'));
            act(() => {
                vi.advanceTimersByTime(NOTIFICATION_DURATION);
            });

            expect(screen.queryByText('Gone soon')).not.toBeInTheDocument();
            expect(document.querySelector('.notification-container')).toBeEmptyDOMElement();
        });

        it('shows multiple notifications in the order they were created', () => {
            const { result } = setup();

            act(() => result.current.notify('First'));
            // ids come from Date.now(), so move the clock to keep them unique
            act(() => {
                vi.advanceTimersByTime(1);
            });
            act(() => result.current.notify('Second'));

            const popups = document.querySelectorAll('.notification-popup');
            expect(Array.from(popups).map((p) => p.textContent)).toEqual(['First', 'Second']);
        });

        it('dismisses each notification on its own timer', () => {
            const { result } = setup();

            act(() => result.current.notify('First'));
            act(() => {
                vi.advanceTimersByTime(1_000);
            });
            act(() => result.current.notify('Second'));

            expect(screen.getByText('First')).toBeInTheDocument();
            expect(screen.getByText('Second')).toBeInTheDocument();

            // t = 3000: First expires, Second has 1s left
            act(() => {
                vi.advanceTimersByTime(NOTIFICATION_DURATION - 1_000);
            });
            expect(screen.queryByText('First')).not.toBeInTheDocument();
            expect(screen.getByText('Second')).toBeInTheDocument();

            // t = 4000: Second expires
            act(() => {
                vi.advanceTimersByTime(1_000);
            });
            expect(screen.queryByText('Second')).not.toBeInTheDocument();
        });
    });

    // Known issue: ids are Date.now(), so two notify() calls in the same millisecond
    // share an id (duplicate React key, and the first timer removes both).
    // Fix by using a useRef counter for ids, then replace this with a real test.
    it.todo('keeps notifications distinct when notify is called twice in the same millisecond');
});
