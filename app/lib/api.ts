import axios from "axios";

const API_URL = "http://localhost:4000";

export const fetchRefunds = async () => {
    const response = await axios.get(`${API_URL}/refunds`);
    return response.data;
};

export const updateRefund = async (id: string, data: Partial<{ active: boolean; decision: string }>) => {
    const response = await axios.patch(`${API_URL}/refunds/${id}`, data);
    return response.data;
};

export const fetchRefundById = async (id: string) => {
    const response = await axios.get(`${API_URL}/refunds/${id}`);
    return response.data;
};
