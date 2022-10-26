import React from 'react';

import { Product } from '../../types';

function getCardCost(price, quantity) {
  let cost = price;
  cost = price * quantity;
  return cost;
}

type BasketCardType = {
  item: Product;
  removeFromBasket: (itemId: any) => void;
};

export const BasketCard: React.FC<BasketCardType> = (props) => {
  const {
    item: { id, title, price, quantity },
    removeFromBasket,
  } = props;

  const RemoveButton = () => (
    <button
      style={{
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
      }}
      onClick={() => removeFromBasket({ id })}
    >
      Remove
    </button>
  );

  return (
    <div style={{ paddingTop: 24, position: 'relative' }}>
      <h3>{title}</h3>
      <p>Cost: £{getCardCost(price, quantity)}</p>
      <p>Quantity: {quantity}</p>
      <RemoveButton />
    </div>
  );
};

export default BasketCard;
