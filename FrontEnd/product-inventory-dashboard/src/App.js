import React from 'react';
import './App.css';
import Products from './components/Products';
import SalesSummary from './components/SalesSummary';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Product Inventory and Sales Dashboard</h1>
            </header>
            <Products />
            <SalesSummary />
        </div>
    );
}

export default App;
