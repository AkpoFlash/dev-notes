import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';

import App from './App/App';

ReactDOM.render(
    <React.Fragment>
        <App />
        <DevTools />
    </React.Fragment>
    ,
    document.getElementById('root')
);