import React, { useEffect, useState } from 'react';
import Info from '../Info/Info';
import './Orders.css'

const Orders = () => {

    const [orderInfo, setOrderInfo] = useState([])
    console.log(orderInfo);
    useEffect(() => {
        fetch('http://localhost:4000/orderDetailsInfo')
            .then(res => res.json())
            .then(info => setOrderInfo(info))
    }, [])
    return (
        <div className=" mt-5">
            <div className="row">
                <div className="col-md-3">

                </div>


                <h2>TOtal order: {orderInfo.length}</h2>
                <div className="d-flex infoHeader justify-content-around my-3 p-1">
                    <h3>Product Name</h3> <h3>OrderId</h3> <h3>Price</h3> <h3>Email</h3> <h3>Date</h3>
                </div>
                <hr />
                {
                    orderInfo.map(info => <Info key={info._id} info={info} />)
                }
                <div className="col-md-3">

                </div>
            </div>
        </div>
    );
};

export default Orders;