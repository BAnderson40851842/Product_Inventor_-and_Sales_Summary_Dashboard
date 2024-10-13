import axios from 'axios';

const API_URL = "https://localhost:7262/api/Products/products";
const API_URLSUM = "https://localhost:7262/api/Products/sales-summary";

export const getProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export const getSalesSummary = async (productId: number) => {
    try {
        const response = await axios.get(`${API_URLSUM}?productId=${productId}`);
        return response.data;
        
    } catch (error) {
        console.error("Error fetching sales summary:", error);
        throw error;
    }
};
