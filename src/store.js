import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { fetchQuoteReducer } from './Reducers/quoteReducer';
import { fetchImgReducer } from './Reducers/imgReducer';

const rootReducer = combineReducers({quote: fetchQuoteReducer, img: fetchImgReducer});

export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);