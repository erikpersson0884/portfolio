import { ReactNode } from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { act, fireEvent, render, renderHook, screen } from '@testing-library/react';
import defaultExport, { ModalProvider, useModalContext } from '../../contexts/ModalContext';

// Isolate the context from the real Modal implementation.
vi.mock('@/components/modal/Modal', () => ({
    default: ({ children, onClose }: { children: ReactNode; onClose: () => void }) => (
        <div data-testid="modal">
            <button onClick={onClose}>Close mock modal</button>
            {children}
        </div>
    ),
}));

const wrapper = ({ children }: { children: ReactNode }) => <ModalProvider>{children}</ModalProvider>;

// Small consumer used for tests that assert on rendered output.
const Consumer = () => {
    const { modalIsOpen, openModal, closeModal } = useModalContext();

    return (
        <div>
            <span data-testid="status">{modalIsOpen ? 'open' : 'closed'}</span>
            <button onClick={() => openModal(<p>First content</p>)}>Open first</button>
            <button onClick={() => openModal(<p>Second content</p>)}>Open second</button>
            <button onClick={closeModal}>Close from consumer</button>
        </div>
    );
};

describe('ModalContext', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    describe('useModalContext', () => {
        it('throws when used outside a ModalProvider', () => {
            // React logs the caught error; keep test output clean.
            vi.spyOn(console, 'error').mockImplementation(() => {});

            expect(() => renderHook(() => useModalContext())).toThrow(
                'useModal must be used within a ModalProvider',
            );
        });

        it('is also available as the default export', () => {
            expect(defaultExport).toBe(useModalContext);
        });

        it('starts closed with no content', () => {
            const { result } = renderHook(() => useModalContext(), { wrapper });

            expect(result.current.modalIsOpen).toBe(false);
            expect(result.current.modalContent).toBeNull();
        });

        it('exposes openModal and closeModal functions', () => {
            const { result } = renderHook(() => useModalContext(), { wrapper });

            expect(typeof result.current.openModal).toBe('function');
            expect(typeof result.current.closeModal).toBe('function');
        });

        it('openModal stores the content and marks the modal as open', () => {
            const { result } = renderHook(() => useModalContext(), { wrapper });
            const content = <p>Hello</p>;

            act(() => result.current.openModal(content));

            expect(result.current.modalIsOpen).toBe(true);
            expect(result.current.modalContent).toBe(content);
        });

        it('closeModal clears the content and marks the modal as closed', () => {
            const { result } = renderHook(() => useModalContext(), { wrapper });

            act(() => result.current.openModal(<p>Hello</p>));
            act(() => result.current.closeModal());

            expect(result.current.modalIsOpen).toBe(false);
            expect(result.current.modalContent).toBeNull();
        });

        it('closeModal is safe to call when already closed', () => {
            const { result } = renderHook(() => useModalContext(), { wrapper });

            act(() => result.current.closeModal());

            expect(result.current.modalIsOpen).toBe(false);
            expect(result.current.modalContent).toBeNull();
        });

        it('openModal replaces existing content', () => {
            const { result } = renderHook(() => useModalContext(), { wrapper });
            const second = <p>Second</p>;

            act(() => result.current.openModal(<p>First</p>));
            act(() => result.current.openModal(second));

            expect(result.current.modalIsOpen).toBe(true);
            expect(result.current.modalContent).toBe(second);
        });
    });

    describe('ModalProvider', () => {
        it('renders its children', () => {
            render(
                <ModalProvider>
                    <p>Child content</p>
                </ModalProvider>,
            );

            expect(screen.getByText('Child content')).toBeInTheDocument();
        });

        it('does not render the Modal initially', () => {
            render(
                <ModalProvider>
                    <Consumer />
                </ModalProvider>,
            );

            expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
            expect(screen.getByTestId('status')).toHaveTextContent('closed');
        });

        it('renders the Modal with the provided content after openModal', () => {
            render(
                <ModalProvider>
                    <Consumer />
                </ModalProvider>,
            );

            fireEvent.click(screen.getByText('Open first'));

            const modal = screen.getByTestId('modal');
            expect(modal).toBeInTheDocument();
            expect(modal).toHaveTextContent('First content');
            expect(screen.getByTestId('status')).toHaveTextContent('open');
        });

        it('keeps children rendered while the Modal is open', () => {
            render(
                <ModalProvider>
                    <Consumer />
                </ModalProvider>,
            );

            fireEvent.click(screen.getByText('Open first'));

            expect(screen.getByText('Open first')).toBeInTheDocument();
            expect(screen.getByTestId('modal')).toBeInTheDocument();
        });

        it('swaps the Modal content when openModal is called again', () => {
            render(
                <ModalProvider>
                    <Consumer />
                </ModalProvider>,
            );

            fireEvent.click(screen.getByText('Open first'));
            fireEvent.click(screen.getByText('Open second'));

            expect(screen.getAllByTestId('modal')).toHaveLength(1);
            expect(screen.queryByText('First content')).not.toBeInTheDocument();
            expect(screen.getByText('Second content')).toBeInTheDocument();
        });

        it('removes the Modal when closeModal is called from a consumer', () => {
            render(
                <ModalProvider>
                    <Consumer />
                </ModalProvider>,
            );

            fireEvent.click(screen.getByText('Open first'));
            fireEvent.click(screen.getByText('Close from consumer'));

            expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
            expect(screen.getByTestId('status')).toHaveTextContent('closed');
        });

        it('removes the Modal when the Modal calls its onClose prop', () => {
            render(
                <ModalProvider>
                    <Consumer />
                </ModalProvider>,
            );

            fireEvent.click(screen.getByText('Open first'));
            fireEvent.click(screen.getByText('Close mock modal'));

            expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
            expect(screen.getByTestId('status')).toHaveTextContent('closed');
        });

        it('can reopen the Modal after it has been closed', () => {
            render(
                <ModalProvider>
                    <Consumer />
                </ModalProvider>,
            );

            fireEvent.click(screen.getByText('Open first'));
            fireEvent.click(screen.getByText('Close mock modal'));
            fireEvent.click(screen.getByText('Open second'));

            expect(screen.getByTestId('modal')).toHaveTextContent('Second content');
            expect(screen.getByTestId('status')).toHaveTextContent('open');
        });
    });
});
