import React from 'react';
import ReactDOM from 'react-dom';
import GlobalProvider from './state/GlobalProvider';
import { App } from './components/App';

ReactDOM.render(
    <GlobalProvider>
        <App/>
    </GlobalProvider>
    , document.getElementById('app'))