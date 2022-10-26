import React from 'react';
import { render } from '../../util/testing';

import { BasketCard } from './BasketCard';

describe('<BasketCard />', () => {
  const props = {
    item: {
      id: '2',
      title: 'Party Pass',
      price: 100,
      quantity: 1,
    },
  };

  it('renders', () => {
    const { container } = render(<BasketCard {...props} />);
    expect(container).toMatchSnapshot();
  });
});
