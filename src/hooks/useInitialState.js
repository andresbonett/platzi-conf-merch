import { useState } from 'react';
import initialState from '../initialState';

export default function useInitialState() {
  const [state, setState] = useState(initialState);

  const addToCard = payload => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCard = payload => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== payload.id),
    });
  };

  return {
    addToCard,
    removeFromCard,
    state,
  };
}
