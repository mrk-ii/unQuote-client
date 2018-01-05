// import {API_BASE_URL} from '../config';
import Unsplash from 'unsplash-js';

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
//   return fetch('https://api.unsplash.com/photos/?client_id=5cfde36a7f5ab330ced5828a1ce5655b7e234144c6f1539be3729b3ec204fc90')
    const unsplash = new Unsplash({
        applicationId: "5cfde36a7f5ab330ced5828a1ce5655b7e234144c6f1539be3729b3ec204fc90",
        secret: "6cf7c077b74ccaf8c41f2284618bd10702324e5db3c04ac4b5a68fc29e1c5dc0",
        callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
    });
    unsplash.photos.getRandomPhoto()
        .then(res => res.json())
        .then(function (json) {
            // console.log(json, 'img.js - line 32');
            console.log(json.user.name, json.user.links.html, json.urls.regular, 'img.js - line 33');
        })
        .then(res =>{
            console.log(res, 'img.js - line 36');
            if(!res.ok) {
                throw new Error(res.statusTest);
            }
            return res.json();
        })
        .then(data =>
            dispatch(fetchImgSuccess(data))
        )
        .catch(err =>
            dispatch(fetchImgError(err))
        );
}
