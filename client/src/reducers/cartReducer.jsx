import { 
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../action-types/cart-action-types';

const intitalState = [];

const cart = (state = intitalState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      const cartList = [...state];
      cartList.push(action.payload);
      return cartList;

    case REMOVE_FROM_CART:
      return state.filter((item, index) => index !== action.payload)

    default:
      return state;
  }
}

export default cart;