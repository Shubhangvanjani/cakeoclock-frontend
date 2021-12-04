import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import Ratings from '../components/Rating';
import { products } from '../data';
import {Link} from 'react-router-dom'

type TParams = {
    id:string
}

function ProductScreen({match}: RouteComponentProps<TParams>) {
    const product = products.find((item) => item._id === match.params.id)

    if(!products){
        return(
            <div>Product Not Found</div>
        )
    }
    return (
        <div>
            <Link to='/'> Back to results</Link>
            <div className='row top'>
                <div className="col-2">
                    <img className='large' src={product?.image}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product?.name}</h1>
                        </li>
                        <li>
                            <Ratings rating={product?.rating} numReviews={product?.numReviews} ></Ratings>
                        </li>
                        <li>
                            Price : {product?.price}
                        </li>
                        <li>
                            Description : 
                            <p>{product?.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className='card card-body'>
                        <ul>
                            <li>Price : {product?.price}</li>
                            <li>
                                <div className='row'>
                                    <div>Status</div>
                                    <div>
                                        {
                                            product?.countInStock! > 0 ? (
                                                <span className="success">In Stock</span>
                                            ) : (
                                                <span className="error">Unavailable</span>
                                            )

                                        }
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add to Cart</button>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductScreen;