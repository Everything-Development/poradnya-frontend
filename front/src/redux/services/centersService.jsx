import apiClient from "../api/apiClient";

class CentersService {
	getAllCenters = () => apiClient().get("api/get_all_consulting_centers");
	createCenter = () => apiClient().post("api/get_all_consulting_centers/")
}

export default new CentersService();
