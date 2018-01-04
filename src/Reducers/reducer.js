import {
    FETCH_QUOTE_REQUEST,
    FETCH_QUOTE_SUCCESS,
    FETCH_QUOTE_ERROR
} from '../Actions/quote';

const initialState = {
    quotes: [],
    loading: false,
    error: null
};

export const fetchQuoteReducer = (state=initialState, action) =>{
    if (action.type === FETCH_QUOTE_REQUEST){
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    else if (action.type === FETCH_QUOTE_SUCCESS){
        return Object.assign({}, state, {
            quotes: action.quotes,
            loading: false,
            error: null
        });
    }
    else if (action.type === FETCH_QUOTE_ERROR){
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state;
}