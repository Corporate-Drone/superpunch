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
        case 'add':
            return {
                ...state,
                items: [payload, ...state.items]
            }
        case 'remove':
            return {
                ...state,
                items: state.items.filter(item => item.id !== payload)
            }
    }
}

export default checkoutItem;