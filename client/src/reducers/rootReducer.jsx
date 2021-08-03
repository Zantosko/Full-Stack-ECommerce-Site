import { combineReducers } from 'redux';
import products from './productReducer';
import itemDetails from './itemDetailReducer';
import cart from './cartReducer';
import isAuthenticated from './authReducer';
import itemCount from './itemCountReducer';

const rootReducer = combineReducers({
	products,
	itemDetails,
	cart,
	isAuthenticated,
	itemCount,
});

export default rootReducer;
