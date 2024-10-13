import * as React from "react";
import SaleSummaryPopup from "./SaleSummaryPopup.tsx";

interface IProduct {
    productId: number; 
    productName: string;
    productPrice: number;    
}

export default function ProductContainer(props: IProduct) {
    return (
        <div className="card card-width">
            <div className="card-body">
                <h5 className="card-title">{props.productName}</h5>
                <h6>{props.productPrice}</h6>
                <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum suscipit voluptatum ea aut labore? Blanditiis repellat reprehenderit laborum, cupiditate repellendus quasi temporibus, pariatur, enim obcaecati natus aspernatur reiciendis praesentium magnam!
                </p>
                <SaleSummaryPopup productId={props.productId} /> 
            </div>
        </div>
    );
}
