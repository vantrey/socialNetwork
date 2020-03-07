import * as serviceWorker from './serviceWorker';
import React from 'react';
import state, {subscriber, postTextUpd, dialogMsgUpd, addNewPost, addNewDialogsMsg} from "./redux/state";
import './index.css';
import App from './App';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addNewPost={addNewPost}
        addNewDialogsMsg={addNewDialogsMsg}
        postTextUpd={postTextUpd}
        dialogMsgUpd={dialogMsgUpd}
      />
    </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree(state)
subscriber(rerenderEntireTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
