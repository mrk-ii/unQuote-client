// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
    <body class="capture">
        <form class="navBar">
            <image class="logo" alt="UnQuote logo" src="/images/UnQuote_logo.png"></image>
            <fieldset class="buttonBox">
                <a href="pictures.html"><button type="button" class="button">Pictures</button></a>
                <a href="quotes.html"><button type="button" class="button">Quotes</button></a>
                <a href="meme.html"><button type="button" class="button">Meme</button></a>
            </fieldset>
        </form>
        {/* <h1>hello</h1> */}
        <h1>
            <span class="blurb">
                Find cool free photos.<br/>
                Add profound quotes.<br/>
                Create unique memes.
            </span>
        </h1>
    </body>
, document.getElementById('root')
);