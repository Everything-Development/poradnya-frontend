import CentersService from "../../services/centersService";
import actions from "./actions";

export const loadCentersAsync = () => (dispatch) => {
	dispatch(actions.centersLoadStart());


	CentersService.getAllCenters()
		.then((response) => dispatch(actions.centersLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.centersLoadError(error.message)));
};

export const updateCenterAsync = () => (dispatch) => {
	dispatch(actions.centerUpdateStart());

	CentersService.updateCenter()
		.then((response)=> dispatch(actions.centerUpdateSuccess(response.data)))
		.catch((error)=> dispatch(actions.centerUpdateError(error.data)))

}