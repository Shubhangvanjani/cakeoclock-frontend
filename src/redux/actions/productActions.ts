import axios from "axios"
import products from "../../api/products"
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"

export const listProducts = () => async (dispatch: any) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    })
    try{
        const data = await products.get()
        dispatch({type: PRODUCT_LIST_SUCCESS, payload:data})
    }catch(error: any){
        dispatch({type: PRODUCT_LIST_FAIL, payload:error.message})
    }
}