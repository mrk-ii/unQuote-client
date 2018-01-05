import {
  FETCH_IMG_REQUEST,
  FETCH_IMG_SUCCESS,
  FETCH_IMG_ERROR
} from '../Actions/img';

const initialState = {
    photographerName: '',
    photographerUrl: '',
    img: '',
    imgLoading: false,
    imgError: null
};

export const fetchImgReducer = (state=initialState, action) =>{
  if (action.type === FETCH_IMG_REQUEST){
        console.log('img: working . . .');
        return Object.assign({}, state, {
            imgLoading: true,
            imgError: null
        });
  }
  else if (action.type === FETCH_IMG_SUCCESS){
        console.log('img: success');
        return Object.assign({}, state, {
            photographerName: action.photographerName,
            photographerUrl: action.photographerUrl,
            img: action.fetchedImg,            
            imgLoading: false,
            imgError: null
        });
  }
  else if (action.type === FETCH_IMG_ERROR){
        console.log('img: error');
        return Object.assign({}, state, {
            imgLoading: false,
            imgError: action.error
        });
  }
  return state;
}