import React, { useEffect, useState } from 'react';
import DeleteProduct from '../DeleteProduct/DeleteProduct';
import Sidebar from '../Sidebar/Sidebar';
import './ManageProduct.css'

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    // console.log(products);


    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(product => setProducts(product))
    }, [])




    return (
        <div className="row">
            <div className="col-md-3">
                <h3>Products Management</h3>
                <Sidebar />
            </div>

            <div className="col-md-6">

                <div>
                    <div className="d-flex justify-content-between mt-5  p-3 manageProductHeader">
                        <h3>Product Name</h3> <h3>Wight</h3> <h3>Price</h3> <h3>Action</h3>
                    </div>
                    <div>
                        {
                            products.map(product => <DeleteProduct product={product} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;