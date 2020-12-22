import { useState } from 'react';
import initialState from '../initialState';

export default function useInitialState() {
  const [state, setState] = useState(initialState);

  const addToCart = payload => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = payload => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== payload.id),
    });
  };

  const addToBuyer = payload => {
    setState({
      ...state,
      buyer: { ...payload },
    });
  };

  const addNewOrder = payload => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    addToBuyer,
    addToCart,
    removeFromCart,
    addNewOrder,
    state,
  };
}
