import { SET_PRODUCTS } from "./products.types";

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}