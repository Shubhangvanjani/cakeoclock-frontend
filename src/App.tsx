import React from 'react';
import { products } from './data';

const App = (): JSX.Element  => {
  return (
    <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="/">Cake-o-Clock</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign In</a>
                </div>
            </header>
            <main>
                <div className="row center">
                  {
                    products.map((item) => (
                      <div key={item._id} className="card">
                          <a href={`/products/${item._id}`}>
                              <img className="medium" src="./images/p1.jpg" alt="product"/>
                          </a>
                          <div className="card-body">
                              <a href={`/products/${item._id}`}>
                                  <h2>{item.name}</h2>
                              </a>
                              <div className="rating">
                                  <span> <i className="fa fa-star"></i></span>
                                  <span><i className="fa fa-star"></i></span>
                                  <span><i className="fa fa-star"></i></span>
                                  <span><i className="fa fa-star"></i></span>
                                  <span><i className="fa fa-star"></i></span>
                              </div>
                              <div className="price">
                                {item.price}
                              </div>
                          </div>
                      </div>
                    ))
                  }
                </div>
            </main>
            <footer className="row center">All rights reserved</footer>
        </div>
  );
}

export default App;
