import { SET_PRODUCTS } from "./products.types";

const INITIAL_STATE = {
    productsList: [],
};

export const products = (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case SET_PRODUCTS:
            return {
                ...state,
                productsList: payload
            }
        default: return state;
    }
};