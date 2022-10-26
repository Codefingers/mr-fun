import React from 'react';
import { render } from '../../util/testing';

import { Basket } from './Basket';

describe('<Basket />', () => {
  it('renders', () => {
    const { container } = render(<Basket />);
    expect(container).toMatchSnapshot();
  });
});
