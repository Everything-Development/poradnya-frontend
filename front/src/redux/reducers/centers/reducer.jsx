import actionTypes from "./actionTypes";
import initialState from "./initialState";

const centersReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.CENTERS_LOAD_START:
			return {
				...state,
				isLoading: true,
				centers: null,
				errorMessage: null,
			};

		case actionTypes.CENTERS_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
				centers: payload,
			};

		case actionTypes.CENTERS_LOAD_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: payload,
			};

		default:
			return state;
	}
};

export default centersReducer;