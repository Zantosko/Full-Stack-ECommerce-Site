import {
	INCREMENT_COUNT,
	DECREMENT_COUNT,
} from '../action-types/itemCount-action-types';

export const incrementCount = (dispatch) => {
	return dispatch({
		type: INCREMENT_COUNT,
	});
};

export const decrementCount = (dispatch) => {
	return dispatch({
		type: DECREMENT_COUNT,
	});
};
