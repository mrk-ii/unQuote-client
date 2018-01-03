// import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Quotes from './Components/selectQuote';



ReactDOM.render(
    <Quotes/>
    , document.getElementById('root')
);
registerServiceWorker();