import React from 'react';
import './Products.css'

const Products = ({ product }) => {
    console.log(product.imageURL);
    return (
        <div className=" p-1">
            <div class="card pd-card rounded" style={{width: "18rem;"}}>
                <img src={product.imageURL} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h3 class="card-title">{product.name}</h3>
                        <h4 class="card-text"><span className="me-5">{product.weight}</span>  <span className="ms-5">{product.price}</span></h4>
                        <button className="btn btn-success">BUY NOW</button>
                    </div>
            </div>
        </div>
    );
};

export default Products;