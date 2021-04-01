import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContaxt } from '../../App';
import './Checkout.css'

const Checkout = () => {
    const [order] = useContext(UserContaxt);
    const history = useHistory();
    const confirmeOrder = () => {  
        if(order.price){
         alert("YOUR ORDER IS CONFIRMED !! your total bill: " + order.price)
         history.push('/home')
        }   
        else{
            alert("please order again then checkout")
            history.push('/home')
        }
        
    }

    return (
        <div className="row mt-5">
            <div className="col-md-3">

            </div>
            <div className="col-md-6">
                <h2>Checkout Your Product</h2>
                <div className="checkOutBox p-3">
                    <div className="d-flex justify-content-between mt-3">
                        <h3>Description</h3> <h3>Weight/Quantity</h3> <h3>Price</h3>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between mt-5">
                        <h4>{order.name}</h4> <h4>{order.weight}</h4> <h4>{order.price}</h4>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <button onClick={confirmeOrder} className="btn btn-success">Order Confirmed</button>
                    </div>
                </div>
            </div>
            <div className="col-md-3">

            </div>
            {/* 
            {_id: "60653f496ddcf514bc397bc6", name: "Rashid Minicate Rice", imageURL: "https://i.ibb.co/VtRhyJ9/image35.png", price: "$124", weight: "50 KG"}
imageURL: "https://i.ibb.co/VtRhyJ9/image35.png"
name: "Rashid Minicate Rice"
price: "$124"
weight: "50 KG"
_id: "60653f496ddcf514bc397bc6"
__proto__: Object
            */}
        </div>
    );
};

export default Checkout;