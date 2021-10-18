import { GET_PRODUCT, GET_PRODUCTS, RESET_PRODUCT, ADD_REVIEW, REMOVE_REVIEW, GET_REVIEWS } from "../actions/types";

const initialState = {
    products: [],
    product: null,
    reviews: [],
    loading: true
}

const products = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        default: {
            return state // We return the default state here
        }
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload,
                loading: false
            }
        case GET_PRODUCT:
            return {
                ...state,
                product: payload,
                loading: false
            }
        case GET_REVIEWS:
            return {
                ...state,
                reviews: payload,
            }
        case RESET_PRODUCT:
            return {
                ...state,
                product: null,
                reviews: []
            }
        case ADD_REVIEW:
            return {
                ...state,
                reviews: [payload, ...state.reviews]
            }
        case REMOVE_REVIEW: {
            return {
                ...state,
                reviews: state.reviews.filter(review => review._id !== payload)
            }
        }
    }
}

export default products;