// import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Quotes from './Components/selectQuote';
import { Provider } from 'react-redux';
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <Quotes />
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();