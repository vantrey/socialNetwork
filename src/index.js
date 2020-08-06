import * as serviceWorker from './serviceWorker';
import React from 'react';
import store from "./redux/redux-store";
import './index.css';
import App from './App';
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux"

/*setInterval(() => {
  store.dispatch({type: "FAKE"})
}, 1000);*/

  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </HashRouter>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
