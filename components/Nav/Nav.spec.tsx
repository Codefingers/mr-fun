import React from 'react';
import { render } from '../../util/testing';

import { Nav } from './Nav';

describe('<Nav />', () => {
  it('renders', () => {
    const { container } = render(<Nav />);
    expect(container).toMatchSnapshot();
  });
});
