import React from 'react';
import Product from '../components/Product';
import { products } from '../data';

function HomeScreen() {
    return (
        <div>
            <div className="row center">
              {
                products.map((item) => (
                  <Product _id={item._id} product={item}></Product>
                ))
              }
            </div>
        </div>
    );
}

export default HomeScreen;