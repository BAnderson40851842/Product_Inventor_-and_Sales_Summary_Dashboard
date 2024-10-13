import React, { useEffect, useState } from 'react';
import { Button, Modal, Spinner, Alert } from 'react-bootstrap';
import { getSalesSummary } from '../services/productService.ts';

interface IProductSaleSummary {
    productDescription: string;
    totalSaleValue: number;
    saleQuantity: number;
    saleDate: string | null; 
}

interface SaleSummaryPopupProps {
    productId: number;
}

const SaleSummaryPopup: React.FC<SaleSummaryPopupProps> = ({ productId }) => {
    const [show, setShow] = useState(false);
    const [saleSummaries, setSaleSummaries] = useState<IProductSaleSummary[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        fetchSaleSummary(); 
    };

    const fetchSaleSummary = async () => {
        setLoading(true);
        setError(null); 
        try {
            const data: IProductSaleSummary[] = await getSalesSummary(productId);
            setSaleSummaries(data); 
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Unknown error');
            console.error('Error fetching sales summary:', error);
        } finally {
            setLoading(false); 
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Show Product Summary
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sales Summary</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {loading ? (
                        <Spinner animation="border" />
                    ) : error ? (
                        <Alert variant="danger">{error}</Alert>
                    ) : (
                        <>
                            <div className="row">
                                <div className="col"><strong>Product Description</strong></div>
                                <div className="col"><strong>Sale Quantity</strong></div>
                                <div className="col"><strong>Total Sale Value</strong></div>
                                <div className="col"><strong>Sale Date</strong></div>
                            </div>
                            {saleSummaries.length > 0 ? (
                                saleSummaries.map((summary, index) => (
                                    <div className="row" key={index}>
                                        <div className="col">{summary.productDescription}</div>
                                        <div className="col">{summary.saleQuantity}</div>
                                        <div className="col">{summary.totalSaleValue}</div>
                                        <div className="col">{summary.saleDate ? new Date(summary.saleDate).toLocaleDateString() : 'N/A'}</div>
                                    </div>
                                ))
                            ) : (
                                <div className="row">
                                    <div className="col">No sales data available.</div>
                                </div>
                            )}
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SaleSummaryPopup;
