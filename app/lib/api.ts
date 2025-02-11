import axios from "axios";

const API_URL = "http://localhost:4000";

export const fetchRefunds = async () => {
    const response = await axios.get(`${API_URL}/refunds`);
    return response.data;
};
