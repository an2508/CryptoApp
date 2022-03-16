import { GET_CURRENCIES_ERROR, GET_CURRENCIES_SUCCESS, GET_CURRENCIES_REQUEST } from "../types/types";


const initialState = {
    loading: false,
    currencies: [],
    error: null,
}

const currenciesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENCIES_REQUEST:

            return {
                ...state,
                loading: true,

            }
            case GET_CURRENCIES_SUCCESS:

            return {
                ...state,
                currencies:action.payload,
                loading: false,

            }
            case GET_CURRENCIES_ERROR:

            return {
                ...state,
                error:action.payload,
                loading: false,

            }

        default: return state
    }
}

export default currenciesReducer;