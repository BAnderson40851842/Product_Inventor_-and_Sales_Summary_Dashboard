import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/productService.ts';
import ProductContainer from './ProductContainer.tsx';
import Product from '../models/Product';

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data: Product[] = await getProducts();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            
            <div className="container">
                <div className="row">
                    {products.map((product) => (
                        <div className="col-sm" key={product.id}>
                            <ProductContainer 
                                productId={product.id} 
                                productName={product.description || 'No Description'} 
                                productPrice={product.salePrice} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
