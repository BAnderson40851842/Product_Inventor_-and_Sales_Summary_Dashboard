import React, { useState, useEffect } from 'react';
import { getSalesSummary } from '../services/productService';

const SalesSummary = () => {
    const [salesSummary, setSalesSummary] = useState([]);

    useEffect(() => {
        const fetchSalesSummary = async () => {
            try {
                const data = await getSalesSummary();
                setSalesSummary(data);
            } catch (error) {
                console.error("Error fetching sales summary:", error);
            }
        };
        fetchSalesSummary();
    }, []);

    return (
        <div>
            <h1>Sales Summary</h1>
            <table>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Description</th>
                        <th>Sale Quantity</th>
                        <th>Total Sale Value</th>
                        <th>Sale Date</th>
                    </tr>
                </thead>
                <tbody>
                    {salesSummary.map((summary) => (
                        <tr key={summary.productId}>
                            <td>{summary.productId}</td>
                            <td>{summary.productDescription}</td>
                            <td>{summary.saleQuantity}</td>
                            <td>{summary.totalSaleValue}</td>
                            <td>{new Date(summary.saleDate).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SalesSummary;
