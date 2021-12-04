import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from './redux/reducers/productReducers';

type initStateType = {
    products: [] | null
}

const initialState:any = {
    products: null
};
const reducer = combineReducers({
    productList: productListReducer,
})
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

