import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Modal from '@/components/modal/Modal';

describe('Modal', () => {
    it('renders nothing when it is closed', () => {
        render(
            <Modal isOpen={false} onClose={vi.fn()}>
                <p>Modal content</p>
            </Modal>,
        );

        expect(screen.queryByText('Modal content')).not.toBeInTheDocument();
    });

    it('renders its children when it is open', () => {
        render(
            <Modal onClose={vi.fn()}>
                <p>Modal content</p>
            </Modal>,
        );

        expect(screen.getByText('Modal content')).toBeInTheDocument();
    });

    it('closes when Escape is pressed', () => {
        const onClose = vi.fn();
        render(
            <Modal onClose={onClose}>
                <p>Modal content</p>
            </Modal>,
        );

        fireEvent.keyDown(document, { key: 'Escape' });

        expect(onClose).toHaveBeenCalledOnce();
    });

    it('does not close for other keyboard events', () => {
        const onClose = vi.fn();
        render(
            <Modal onClose={onClose}>
                <p>Modal content</p>
            </Modal>,
        );

        fireEvent.keyDown(document, { key: 'Enter' });

        expect(onClose).not.toHaveBeenCalled();
    });

    it('closes when the backdrop is clicked but not when content is clicked', () => {
        const onClose = vi.fn();
        render(
            <Modal onClose={onClose}>
                <div>Modal content</div>
            </Modal>,
        );

        const overlay = screen.getByRole('presentation');
        fireEvent.click(screen.getByText('Modal content'));
        expect(onClose).not.toHaveBeenCalled();

        fireEvent.click(overlay);
        expect(onClose).toHaveBeenCalledOnce();
    });
});
