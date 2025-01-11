import { render, screen } from '@testing-library/react';

import HomePage from '@/app/page';

describe('HomePage Component', () => {
  it('should render the heading', () => {
    render(<HomePage />);
    const heading = screen.getByText(/This is HomePage/i);
    expect(heading).toBeInTheDocument();
  });
});
