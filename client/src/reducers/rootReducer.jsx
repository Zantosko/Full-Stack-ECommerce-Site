import { combineReducers } from 'redux';
import products from './productReducer';
import itemDetails from './itemDetailReducer';
import cart from './cartReducer';
import isAuthenticated from './authReducer';
import itemCount from './itemCountReducer';
import userInfo from './userInfoReducer';
import total from './purchaseAmountReducer';

const rootReducer = combineReducers({
	products,
	itemDetails,
	cart,
	isAuthenticated,
	itemCount,
	userInfo,
	total,
});

export default rootReducer;
