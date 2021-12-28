import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { productDetailsReducer, productListReducer } from './redux/reducers/productReducers';

// type initStateType = {
//     products: [] | null
// }

const initialState:any = {
    // products: null
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails:productDetailsReducer
})
const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ()|| compose;
export const store = createStore(reducer, initialState, compose(applyMiddleware(thunk),  composeEnhancer));

