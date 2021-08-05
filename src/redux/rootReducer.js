import { combineReducers } from "redux";
import { counter } from './Counter/counter.reducer';
import { products } from './Products/product.reducer';

export const rootReducer = combineReducers({
    counter,
    products,
})