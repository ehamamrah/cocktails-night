import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './components/serviceWorker';
import WebFontLoader from 'webfontloader'

WebFontLoader.load({
  google: {
    families: [
      'Commissioner:400,500,700:latin-ext',
      'Merriweather+Sans:400,700:latin-ext',
    ]
  }
});

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
