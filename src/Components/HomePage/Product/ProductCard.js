import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBath, faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import './Product.scss'

const ProductCard = ({product}) => {
    return (
        <div className="col-md-4 pb-4">
            <div class="card">
            {
                    product.image.img
                    ?<img src={`data:image/png;base64,${product.image.img}`} className="card-img"  alt="" />
                    :<img src={product.image}  alt="" className="card-img"/>
                }
                <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">  <FontAwesomeIcon icon={faSearchLocation} />{product.location}</p>
                    <div className="d-flex justify-content-between">
                            <h6><span><FontAwesomeIcon icon={faBed}/>{product.bedroom} bedroom</span></h6>
                            <h6><span><FontAwesomeIcon icon={faBath}/>{product.bathroom} bathroom</span></h6>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h3><span>$</span> {product.price}</h3>
                        <Link className="btn text-white" style={{ cursor: 'pointer', backgroundColor: '#275a53' }} to="/rentDetails">View Details</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ProductCard;