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
				count: state.count + 1,
			};

		case DECREMENT_COUNT:
			return {
				count: state.count - 1,
			};

		default:
			return state;
	}
};

export default itemCount;
