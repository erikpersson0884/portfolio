import { render, screen } from '@testing-library/react';
import Postcards from './Postcards';
import { activities } from '@/data/portfolio';

describe('Postcards', () => {
    it('renders one photo per activity with a caption', () => {
        render(<Postcards />);

        expect(screen.getAllByRole('img')).toHaveLength(activities.length);
        for (const activity of activities) {
            expect(screen.getByText(activity.name)).toBeInTheDocument();
        }
    });
});
