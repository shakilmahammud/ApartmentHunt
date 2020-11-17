import React, { useEffect, useState } from 'react';
// import product1 from '../../../images/Rectangle 394.png';
// import product2 from '../../../images/Rectangle 396.png';
// import product3 from '../../../images/Rectangle 398.png';
import ProductCard from './ProductCard';


// const productData = [
//     {
//         title: 'Gorgeous House',
//         description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
//         loc: 'NasiraBad H/S Chattogram',
//         price: '$500',
//         img: product1
//     },
//     {
//         title: 'Gorgeous House',
//         description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
//         loc: 'NasiraBad H/S Chattogram',
//         price: '$500',
//         img: product2
//     },
//     {
//         title: 'Gorgeous House',
//         description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
//         loc: 'NasiraBad H/S Chattogram',
//         price: '$500',
//         img: product3
//     }
// ]


const Product = () => {
    const [apartment,setApartment]=useState([])

    useEffect(() => {
        fetch('https://shakil-apartment.herokuapp.com/apartment')
            .then(res => res.json())
            .then(data =>setApartment(data))
    },[])
    return (
        <div className="container">
            <p className="text-uppercase text-center pt-4">house rent</p>
            <h1 className="text-center pb-4">Discover the latest Rent <br/> available today</h1>
            <div className="row">
                {
                    apartment.map(product => <ProductCard product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Product;