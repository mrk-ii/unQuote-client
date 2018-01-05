import {
  FETCH_IMG_REQUEST,
  FETCH_IMG_SUCCESS,
  FETCH_IMG_ERROR
} from '../Actions/img';

const initialState = {
  img: {},
  imgLoading: false,
  imgError: null
};

export const fetchImgReducer = (state=initialState, action) =>{
  if (action.type === FETCH_IMG_REQUEST){
      return Object.assign({}, state, {
          imgLoading: true,
          imgError: null
      });
  }
  else if (action.type === FETCH_IMG_SUCCESS){
      return Object.assign({}, state, {
          img: action.fetchedImg,
          imgLoading: false,
          imgError: null
      });
  }
  else if (action.type === FETCH_IMG_ERROR){
      return Object.assign({}, state, {
          imgLoading: false,
          imgError: action.error
      });
  }
  return state;
}