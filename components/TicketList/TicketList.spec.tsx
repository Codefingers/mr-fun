import React from 'react';
import { screen, render, fireEvent } from '../../util/testing';

import { TicketList, TicketCard } from './TicketList';

describe('<TicketList />', () => {
  const props = {
    title: 'test title',
    products: [
      {
        id: '1',
        title: 'prod 1',
        price: 10.0,
        quantity: 2,
      },
      {
        id: '2',
        title: 'prod 2',
        price: 12.4,
        quantity: 1,
      },
    ],
  };

  it('renders', () => {
    const { container } = render(<TicketList {...props} />);
    expect(container).toMatchSnapshot();
  });
});

describe('<TicketCard />', () => {
  const props = {
    product: {
      id: '1',
      title: 'Product 1',
      price: 10.0,
      quantity: 2,
    },
  };

  it('renders', () => {
    const { container } = render(<TicketCard {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('calls addToBasket with product info', () => {
    render(<TicketCard {...props} />);
    fireEvent.click(screen.getByText(/Product 1/i));
  });
});
