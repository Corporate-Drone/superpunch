import { ADD_CART, REMOVE_CART } from "../actions/types";

const initialState = {
    items: []
}

const checkoutItem = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        default:
            return {
                ...state,
                items: [...state.items]
            }
        case ADD_CART:
            return {
                ...state,
                items: [payload, ...state.items]
            }
        case REMOVE_CART:
            return {
                ...state,
                items: state.items.filter(item => item._id !== payload)
            }
    }
}

export default checkoutItem;