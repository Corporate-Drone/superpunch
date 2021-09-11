const initialState = {
    items: []
}

const checkoutItem = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
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