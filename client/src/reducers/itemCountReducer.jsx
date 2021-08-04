import {
	INCREMENT_COUNT,
	DECREMENT_COUNT,
} from '../action-types/itemCount-action-types';

const initialState = {
	count: 0,
};

const itemCount = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT_COUNT:
			return {
				count: action.payload,
			};

		case DECREMENT_COUNT:
			return {
				count: 0,
			};

		default:
			return state;
	}
};

export default itemCount;
