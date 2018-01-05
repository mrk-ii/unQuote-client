import {API_BASE_URL} from '../config';

export const FETCH_CREATE_MEME_REQUEST = 'FETCH_CREATE_MEME_REQUEST';
export const fetchCreateMemeRequest = () => ({
    type: FETCH_CREATE_MEME_REQUEST
});

export const FETCH_CREATE_MEME_SUCCESS = 'FETCH_CREATE_MEME_SUCCESS';
export const fetchCreateMemeSuccess = (createdMeme) => ({
    type: FETCH_CREATE_MEME_SUCCESS,
    createdMeme
});

export const FETCH_CREATE_MEME_ERROR = 'FETCH_CREATE_MEME_ERROR';
export const fetchCreateMemeError = (error) => ({
    type: FETCH_CREATE_MEME_ERROR,
    error
});

export const fetchCreateMeme = (quote, author, photographerName, photographerURL, imageUrl, rating) => dispatch => {
    dispatch(fetchCreateMemeRequest());
    return fetch(`${API_BASE_URL}/memes`, {
        method: 'post',
        body: JSON.stringify({quote, author, photographerName, photographerURL, imageUrl, rating}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(res =>{
            if(!res.ok) {
                throw new Error(res.statusTest);
            }
            return res.json();
        }).then(data =>
            dispatch(fetchCreateMemeSuccess(data))
        ).catch(err =>
            dispatch(fetchCreateMemeError(err))
        );
}