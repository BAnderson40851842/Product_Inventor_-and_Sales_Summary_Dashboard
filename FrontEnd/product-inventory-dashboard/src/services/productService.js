import axios from 'axios';

const API_URL = "https://localhost:5001/api/products";

export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export const getSalesSummary = async () => {
    try {
        const response = await axios.get(`${API_URL}/sales-summary`);
        return response.data;
    } catch (error) {
        console.error("Error fetching sales summary:", error);
        throw error;
    }
};
