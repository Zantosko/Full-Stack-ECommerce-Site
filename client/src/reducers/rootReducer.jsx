import { combineReducers } from 'redux';
import products from './productReducer';
import itemDetails from './itemDetailReducer';
import cart from './cartReducer';
import isAuthenticated from './authReducer';
import itemCount from './itemCountReducer';
import userInfo from './userInfoReducer';

const rootReducer = combineReducers({
	products,
	itemDetails,
	cart,
	isAuthenticated,
	itemCount,
	userInfo,
});

export default rootReducer;
