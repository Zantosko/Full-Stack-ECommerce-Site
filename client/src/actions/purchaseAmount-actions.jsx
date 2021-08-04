import { PURCHASE_TOTAL } from '../action-types/purchaseAmount-action-types';

export const setTotal = (dispatch, total) => {
	return dispatch({
		type: PURCHASE_TOTAL,
		payload: total,
	});
};
