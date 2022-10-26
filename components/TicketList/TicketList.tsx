import React, { useState, Component } from 'react';
import styled from 'styled-components';

import { Product } from '../../types';

const TListC = styled.div`
  margin: 16px 24px;
  padding: 16px 24px;
`;

const TicketCardContainer = styled.div`
  padding: 16px 24px 24px;
  border: 4px solid #1D2433;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0;
  }

  p {
    padding-bottom: 16px;
  }

  &.active {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  button {
    align-self: flex-end;
  }
`;

export const TicketCard: React.FC<{ product: Product }> = (props) => {
  const [active, setActive] = useState<boolean>();
  const {
    product: { id, title, price },
  } = props;
  const activeClass = active ? 'card active' : 'card';

  return (
    <TicketCardContainer
      className={activeClass}
      onClick={() => {
        setActive(true);
      }}
    >
      <h3>{title}</h3>
      <p>£{price}</p>
      <button>Add to Basket</button>
    </TicketCardContainer>
  );
};


export class TicketList extends Component<{
  products: Array<Product>;
  title: string;
}> {
  render() {
    const { products, title } = this.props;

    return (
      <TListC>
        <h1>What passes will you need?</h1>
        <h2>{title}</h2>
        <div>
          {products.map((product, index) => (
            <div key={`listing-${index}`}>
              <TicketCard product={product} />
            </div>
          ))}
        </div>
      </TListC>
    );
  }
}

export default TicketList;
