// import {API_BASE_URL} from '../config';

export const FETCH_IMG_REQUEST = 'FETCH_IMG_REQUEST';
export const fetchImgRequest = () => ({
    type: FETCH_IMG_REQUEST
});

export const FETCH_IMG_SUCCESS = 'FETCH_IMG_SUCCESS';
export const fetchImgSuccess = (fetchedImg) => ({
    type: FETCH_IMG_SUCCESS,
    fetchedImg
});

export const FETCH_IMG_ERROR = 'FETCH_IMG_ERROR';
export const fetchImgError = (error) => ({
    type: FETCH_IMG_ERROR,
    error
});

export const fetchImg = () => dispatch => {
  dispatch(fetchImgRequest());
  return fetch('https://api.unsplash.com/photos/?client_id=5cfde36a7f5ab330ced5828a1ce5655b7e234144c6f1539be3729b3ec204fc90')
      .then(res =>{
          if(!res.ok) {
              throw new Error(res.statusTest);
          }
          return res.json();
      }).then(data =>
          dispatch(fetchImgSuccess(data))
      ).catch(err =>
          dispatch(fetchImgError(err))
      );
}



