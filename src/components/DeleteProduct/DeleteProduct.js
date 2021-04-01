import React from 'react';

const DeleteProduct = ({ product }) => {
    console.log(product);

    const deleteProduct = id => {
        console.log(id)
        fetch(`http://localhost:4000/deleteProduct/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log("deleted successfully");
                document.getElementById('productDetails').style.display = 'none';
                // if (result) {
                //     document.getElementById('productDetails').style.display = 'none';
                // }
            })
    }

    return (
        <div id="productDetails">
            <div style={{ backgroundColor: 'white' }} className="d-flex justify-content-between p-3">
                <p>{product.name}</p>
                <p>{product.weight}</p>
                <p>{product.price}</p>
                <button className="btn btn-danger" onClick={() => deleteProduct(product._id)}>Delete</button>
            </div>
        </div>

    );
};

export default DeleteProduct;