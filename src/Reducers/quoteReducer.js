import {
    FETCH_QUOTE_REQUEST,
    FETCH_QUOTE_SUCCESS,
    FETCH_QUOTE_ERROR
} from '../Actions/quote';

const initialState = {
    quote: [],
    quoteLoading: false,
    quoteError: null
};

export const fetchQuoteReducer = (state=initialState, action) =>{
    if (action.type === FETCH_QUOTE_REQUEST){
        console.log('quote: working . . .');
        return Object.assign({}, state, {
            quoteLoading: true,
            quoteError: null
        });
    }
    else if (action.type === FETCH_QUOTE_SUCCESS){
        console.log('quote: success');
        return Object.assign({}, state, {
            quote: action.fetchedQuote,
            quoteLoading: false,
            quoteError: null
        });
    }
    else if (action.type === FETCH_QUOTE_ERROR){
        console.log('quote: error');
        return Object.assign({}, state, {
            quoteLoading: false,
            quoteError: action.error
        });
    }
    return state;
}