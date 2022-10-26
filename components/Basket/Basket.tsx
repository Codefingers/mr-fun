import React from 'react';
import styled from 'styled-components';

import BasketCard from '../BasketCard/BasketCard';
import Total from '../Total/Total';
import { useBasket } from '../../hooks/useBasket';
import { Product } from '../../types';

const BasketContainer = styled.div`
  margin: 16px 24px;
  padding: 16px 24px;
  margin-top: 68px;
`;

export const Basket = () => {
  const { basket, removeFromBasket } = useBasket();

  return (
    <BasketContainer>
      <h2>Your Basket</h2>
      <p>You're currently looking at purchasing the following passes:</p>
      <div>
        {basket?.map((item: Product, index) => {
          if (item && item.quantity) {
            return (
              <BasketCard
                item={item}
                key={`basket-item-${index}`}
                removeFromBasket={removeFromBasket}
              />
            );
          }
          return '';
        })}
      </div>
      <Total basket={basket} />
    </BasketContainer>
  );
};

export default Basket;
