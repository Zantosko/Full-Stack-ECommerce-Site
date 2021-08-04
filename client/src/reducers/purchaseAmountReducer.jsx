import { PURCHASE_TOTAL } from '../action-types/purchaseAmount-action-types';

const initialState = 0;

const total = (state = initialState, action) => {
	switch (action.type) {
		case PURCHASE_TOTAL:
			return (state = action.payload);

		default:
			return state;
	}
};

export default total;
