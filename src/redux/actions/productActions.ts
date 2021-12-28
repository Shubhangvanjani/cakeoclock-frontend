// import axios from "axios"
import { Dispatch } from "redux"
import products from "../../api/products"
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"

export const listProducts = () => async (dispatch: any) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    })
    try{
        const {data}: any = await products.get()
        console.log("Data /...../ ",data)
        dispatch({type: PRODUCT_LIST_SUCCESS, payload:data})
    }catch(error: any){
        dispatch({type: PRODUCT_LIST_FAIL, payload:error.message})
    }
}

export const detailsProduct = (id:string) => async (dispatch: Dispatch) => {
    dispatch({
        type: PRODUCT_DETAILS_REQUEST
    })
    try{
        const {data}: any = await products.getById(id)
        console.log("Data /...../ ",data)
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload:data})
    }catch(error: any){
        dispatch({type: PRODUCT_DETAILS_FAIL, payload:error.response && error.response.data.message
        ?error.response.data.message
        :error.message })
    }
}