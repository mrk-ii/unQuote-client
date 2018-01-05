import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Meme from './Components/Meme';
import { Provider } from 'react-redux';
import store from './store'



ReactDOM.render(
    <Provider store={store}>
        <Meme />
    </Provider>
    , document.getElementById('root')
);
// registerServiceWorker();