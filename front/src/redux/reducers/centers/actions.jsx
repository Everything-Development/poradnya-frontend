import actionTypes from "./actionTypes";

const centersLoadStart = () => ({
	type: actionTypes.CENTERS_LOAD_START,
});

const centersLoadSuccess = (centers) => ({
	type: actionTypes.CENTERS_LOAD_SUCCESS,
	payload: centers,
});

const centersLoadError = (errorMessage) => ({
	type: actionTypes.CENTERS_LOAD_ERROR,
	payload: errorMessage,
});

export default {
	centersLoadStart,
	centersLoadSuccess,
	centersLoadError,
};