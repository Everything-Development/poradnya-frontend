import { combineReducers } from "redux";
import centersReducer from "./centers/reducer";

const rootReducer = () =>
	combineReducers({
		centers: centersReducer,
	});

export default rootReducer;