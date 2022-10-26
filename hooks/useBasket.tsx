import React, { createContext, useContext, useState } from 'react';
import { Product } from '../types';

const defaultBasket = [];

export const BasketContext = createContext<{
  basket: Array<Product>;
  updateBasket?: (product: Array<Product>) => void;
}>({
  basket: defaultBasket,
});

export const BasketProvider = ({ children }) => {
  const [basket, updateBasket] = useState<Array<Product>>(defaultBasket);

  return (
    <BasketContext.Provider
      value={{
        basket,
        updateBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const { basket: currentBasket, updateBasket } = useContext(BasketContext);

  const removeFromBasket = (itemId) => {
    const basket = currentBasket.map((item) => {
      if (item.id === itemId && item.quantity >= 1) {
        return {
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.quantity - 1,
        };
      }

      return item;
    });

    updateBasket(basket);
  };

  const addToBasket = ({
    id: itemId,
    title,
    price,
    quantity = 1
  }: Product) => {
    let basket;
    if (currentBasket.find((item) => item.id === itemId)) {
      basket = currentBasket.map((item) => {
        if (item.id === itemId) {
          return {
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity + quantity,
          };
        }

        return item;
      });
    } else {
      basket = [
        ...currentBasket,
        {
          id: itemId,
          title,
          price,
          quantity,
        },
      ];
    }

    updateBasket(basket);
  };

  return { basket: currentBasket, removeFromBasket, addToBasket };
};
