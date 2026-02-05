export const cartService = {
    cartReducer: (state, action) => {
        switch (action.type) {
            case "ADD":
                if (state.items.some((c) => c.id === action.payload.id))
                    return state;
                return { ...state, items: [...state.items, action.payload] };

            case "REMOVE":
                return { ...state, items: state.items.filter((c) => c.id !== action.payload) };

            case "CLEAR":
                return { ...state, items: [] };

            default:
                return state;
        }
    },
    isInCart: (items, productId) => {
        return items.some(item => item.id === productId)
    }
}