import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { connect } from 'react-redux';
import { fetchQuoteReducer } from './Reducers/quoteReducer';
import { fetchImgReducer } from './Reducers/imgReducer';
// import { fetchQuoteReducer as reducer } from 'redux';
// import { fetchImgReducer as reducer } from 'redux';


const rootReducer = combineReducers({quote: fetchQuoteReducer, img: fetchImgReducer});



export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);