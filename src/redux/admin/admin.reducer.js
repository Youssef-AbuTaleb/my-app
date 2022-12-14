import {GETORDERS, GETREVIEWS} from "./admin.types";

const initialState = {
    reviews   : [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GETREVIEWS :
            return ({
                ...state,
                reviews: action.reviews
            })

        case GETORDERS:
            return ({
                ...state,
                orders: action.orders
            })

        default:
            return state;
    }
}

export default reducer;