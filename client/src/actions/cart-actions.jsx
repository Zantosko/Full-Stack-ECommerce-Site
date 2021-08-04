import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	CLEAR_CART,
} from '../action-types/cart-action-types';

export const addItemToCart = async (dispatch) => {
	const response = await fetch(
		'http://localhost:4001/user/add-item',
		{
			method: 'GET',
			headers: { token: localStorage.token },
		}
	);

	const parseResponse = await response.json();

	return dispatch({
		type: ADD_TO_CART,
		payload: parseResponse,
	});
};

export const removeItemFromCart = async (
	dispatch,
	itemId
) => {
	const body = {
		id: itemId,
	};

	const response = await fetch(
		'http://localhost:4001/user/remove-item',
		{
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				token: localStorage.token,
			},
			body: JSON.stringify(body),
		}
	);

	const parseResponse = await response.json();

	return dispatch({
		type: REMOVE_FROM_CART,
		payload: parseResponse,
	});
};

export const clearCart = async (dispatch) => {
	const response = await fetch(
		'http://localhost:4001/user/clear-cart',
		{
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				token: localStorage.token,
			},
		}
	);

	const parseResponse = await response.json();

	return dispatch({
		type: CLEAR_CART,
		payload: parseResponse,
	});
};
