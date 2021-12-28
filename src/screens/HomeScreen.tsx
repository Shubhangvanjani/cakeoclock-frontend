import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
// import { products } from '../data';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../redux/actions/productActions';

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state: RootStateOrAny) => state.productList)
    useEffect(() => {
      dispatch(listProducts())
    },[dispatch])

    return (
        <div>
          {
            productList.loading ? <LoadingBox></LoadingBox>
            :productList.error ? <MessageBox variant="danger">{productList.error}</MessageBox>
            : (
            <div className="row center">
              {
                productList.products.map((item:any) => (
                  <Product _id={item._id} product={item} key={item._id}></Product>
                ))
              }
            </div>
            )
          }
        </div>
    );
}

export default HomeScreen;