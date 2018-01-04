import {API_BASE_URL} from '../config';

export const FETCH_QUOTE_REQUEST = 'FETCH_QUOTE_REQUEST';
export const fetchQuoteRequest = () => ({
    type: FETCH_QUOTE_REQUEST
});

export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
export const fetchQuoteSuccess = (quotes) => ({
    type: FETCH_QUOTE_SUCCESS,
    quotes
});

export const FETCH_QUOTE_ERROR = 'FETCH_QUOTE_ERROR';
export const fetchQuoteError = (error) => ({
    type: FETCH_QUOTE_ERROR,
    error
});

export const fetchQuotes = () => dispatch => {
    dispatch(fetchQuoteRequest());
    return fetch(`${API_BASE_URL}/quotes`)
        .then(res =>{
            if(!res.ok) {
                throw new Error(res.statusTest);
            }
            return res.json();
        }).then(data =>
            dispatch(fetchQuoteSuccess(data))
        ).catch(err =>
            dispatch(fetchQuoteError(err))
        );
}