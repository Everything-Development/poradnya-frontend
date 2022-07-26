import apiClient from "../api/apiClient";

class CentersService {
	getAllCenters = () => apiClient().get("api/get_all_consulting_centers");
	updateCenter = () => apiClient().post("api/get_all_consulting_centers")
}

export default new CentersService();
