import { combineReducers } from "redux";
import products from './productReducer';
import itemDetails from './itemDetailReducer';
import cart from './cartReducer';
// Import your reducers and put them inside of here so you have access to the store.
const rootReducer = combineReducers({
  products,
  itemDetails,
  cart
});

export default rootReducer;
