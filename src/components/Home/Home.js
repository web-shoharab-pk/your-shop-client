import React from 'react';
import Products from '../Proucts/Products';
import './Home.css'

const Home = () => {

    const products = [
        {
            name: 'Marks Full Cream Milk Powder Foil',
            weight: '500 gm',
            imageURL: '../../products-img/image32.png',
            price: '$234'
        },
        {
            name: 'Moushum Bay Leaves ',
            weight: '200 gm',
            imageURL: '../../products-img/image33.png',
            price: '$134'
        },
        {
            name: 'Onion Local ',
            weight: '1 Kg',
            imageURL: '../../products-img/image34.png',
            price: '$434'
        },
        {
            name: 'Rashid Minicate Rice',
            weight: '50 Kg',
            imageURL: '../../products-img/image35.png',
            price: '$334'
        },
        {
            name: 'Omera LPG Refill',
            weight: '12 Kg',
            imageURL: '../../products-img/image36.png',
            price: '$342'
        },
        {
            name: 'Bombay Sweets Mr.Twist',
            weight: '25 gm',
            imageURL: '../../products-img/image37.png',
            price: '$132'
        },
        {
            name: 'Lifeboy Soap Bar Tota',
            weight: '100 gm',
            imageURL: '../../products-img/image38.png',
            price: '$334'
        },  {
            name: 'Ruchi BBQ Chanachur',
            weight: '350 gm',
            imageURL: '../../products-img/image39.png',
            price: '$342'
        },  {
            name: 'Parachute Coconut Oil',
            weight: '200ml',
            imageURL: '../../products-img/image40.png',
            price: '$132'
        }
        
    ]

    return (
        <div className="home-container container mt-5" >
             {
                 products.map(product =>  <Products product={product} />)
             }           
        </div>
    );
};

export default Home;