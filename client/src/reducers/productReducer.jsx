import { GET_PRODUCTS } from '../action-types/product-action-types'

const initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      const productList = [...state];
      productList.push(action.payload);
      return productList;

    default:
      return state;
  }
}

export default products;