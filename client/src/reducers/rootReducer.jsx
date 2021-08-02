import { combineReducers } from 'redux';
import products from './productReducer';
import itemDetails from './itemDetailReducer';
import cart from './cartReducer';
import isAuthenticated from './authReducer';

const rootReducer = combineReducers({
	products,
	itemDetails,
	cart,
	isAuthenticated,
});

export default rootReducer;
