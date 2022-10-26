import React from 'react';

import styled from 'styled-components';
import { Product } from '../../types';

const calculateTotal = (basket) =>
  basket?.length &&
  basket.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

const TotalContainer = styled.div`
  margin-top: 32px;
  padding: 0;
  border-top: 4px solid;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h2 {
    display: block;
  }
`;

export const TotalComponent: React.FC<{ basket: Array<Product> }> = ({
  basket,
}) => (
  <TotalContainer>
    <h2>Total: {`£${calculateTotal(basket)}`}</h2>
  </TotalContainer>
);

export default TotalComponent;
