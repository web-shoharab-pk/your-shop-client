import React, { useEffect, useState } from 'react';
import Products from '../Proucts/Products';
import './Home.css'

const Home = () => {
 
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/products')
        .then(res => res.json())
        .then(product => setProducts(product))
    }, [])


    return (
        <div className="home-container container mt-5" >
             {
                 products.map(product =>  <Products product={product} />)
             }           
        </div>
    );
};

export default Home;