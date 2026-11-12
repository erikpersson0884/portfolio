import { render, screen } from '@testing-library/react';
import Ticker from './Ticker';

describe('Ticker', () => {
    it('offers the items as a normal list for screen readers', () => {
        render(<Ticker items={['First', 'Second']} />);

        expect(screen.getAllByRole('listitem').map((item) => item.textContent)).toEqual(['First', 'Second']);
    });
});
