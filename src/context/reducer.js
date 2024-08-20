export const initialState = {
    wishlist: [],
    token: null,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_WISHLIST":
            let index = state.wishlist.findIndex(
                (item) => item.id === action.payload.id
            );
            if (index < 0) {
                return {
                    ...state,
                    wishlist: [...state.wishlist, action.payload],
                };
            } else {
                return {
                    ...state,
                    wishlist: state.wishlist.filter(
                        (item) => item.id !== action.payload.id
                    ),
                };
            }
        default:
            return state;
    }
};
