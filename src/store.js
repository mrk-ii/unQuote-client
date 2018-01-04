import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {fetchQuoteReducer} from './Reducers/reducer';
// import {connect} from 'react-redux';

export default createStore(
    fetchQuoteReducer,
    applyMiddleware(thunk)
);