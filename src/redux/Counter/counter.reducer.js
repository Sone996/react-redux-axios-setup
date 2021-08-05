import { INCREMENT, DECREMENT } from "./counter.types";

const INITIAL_STATE = {
    count: 0,
};

export const counter = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case INCREMENT: 
            return {
                ...state, count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state, count: state.count - 1,
            };
        default: return state;
    }
};