import * as serviceWorker from './serviceWorker';
import React from 'react';
import store from "./redux/state";
import './index.css';
import App from './App';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
let state = store.getState()
let rerenderEntireTree = () => {

  ReactDOM.render(
    <BrowserRouter>
      <App
        store={store}
        state={state}
      />
    </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
