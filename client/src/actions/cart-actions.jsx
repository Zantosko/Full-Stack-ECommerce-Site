import { 
  ADD_TO_CART, 
  REMOVE_FROM_CART 
} from '../action-types/cart-action-types';

export const addItemToCart = (dispatch, item) => {
  return dispatch({ type: ADD_TO_CART, payload: item })
}

export const removeItemFromCart = (dispatch, itemID) => {
  return dispatch({ type: REMOVE_FROM_CART, payload: itemID })
}

