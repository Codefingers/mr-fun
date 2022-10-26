import React from 'react';
import { render } from '../../util/testing';

import Total from './Total';

describe('<Total />', () => {
  const props = {
    basket: [
      {
        id: '1',
        price: 10.0,
        quantity: 2,
        title: 'product 1',
      },
      {
        id: '2',
        price: 12.4,
        quantity: 1,
        title: 'product 2',
      },
    ],
  };

  it('renders with correct total', () => {
    const { container } = render(<Total {...props} />);
    expect(container).toMatchSnapshot();
  });
});
