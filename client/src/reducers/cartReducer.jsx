import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	CLEAR_CART,
} from '../action-types/cart-action-types';

const intitalState = [];

const cart = (state = intitalState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			state = action.payload;
			return state;

		case REMOVE_FROM_CART:
			state = action.payload;
			return state;

		case CLEAR_CART:
			state = action.payload;
			return state;

		default:
			return state;
	}
};

export default cart;
