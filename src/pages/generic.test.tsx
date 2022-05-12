import { render, screen } from '@testing-library/react';

import Home from '../pages/index';

describe('<Home />', () => {
  it('mock test', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: /Next.js/i }));
  });
});
