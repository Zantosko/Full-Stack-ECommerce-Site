import {
	INCREMENT_COUNT,
	DECREMENT_COUNT,
} from '../action-types/itemCount-action-types';

export const incrementCount = (dispatch, itemAmount) => {
	return dispatch({
		type: INCREMENT_COUNT,
		payload: itemAmount,
	});
};

export const decrementCount = (dispatch) => {
	return dispatch({
		type: DECREMENT_COUNT,
	});
};
