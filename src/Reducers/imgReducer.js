import {
  FETCH_IMG_REQUEST,
  FETCH_IMG_SUCCESS,
  FETCH_IMG_ERROR
} from '../Actions/img';

const initialState = {
  img: {},
  loading: false,
  error: null
};

export const fetchImgReducer = (state=initialState, action) =>{
  if (action.type === FETCH_IMG_REQUEST){
      return Object.assign({}, state, {
          loading: true,
          error: null
      });
  }
  else if (action.type === FETCH_IMG_SUCCESS){
      return Object.assign({}, state, {
          img: action.fetchedImg,
          loading: false,
          error: null
      });
  }
  else if (action.type === FETCH_IMG_ERROR){
      return Object.assign({}, state, {
          error: action.error,
          loading: false
      });
  }
  return state;
}