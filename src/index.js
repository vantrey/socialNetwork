import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
  {id: 1, name: 'Ivan',},
  {id: 2, name: 'Anna',},
  {id: 3, name: 'Varia',},
  {id: 4, name: 'Ulia',},
  {id: 5, name: 'Liuda',},
]
let dialogsMessages = [
  {id: 1, message: 'Hi! How are you?'},
  {id: 2, message: 'What is your name?'},
  {id: 3, message: 'Marvelous'},
]

let profilePosts = [
  {id: 1, message: 'Hey Hi! It\'s first mesage', likeCount: 20},
  {id: 2, message: 'Hey It\'s second!!!', likeCount: 3},
  {id: 3, message: 'Hey It\'s third!!!', likeCount: 65},
  {id: 4, message: 'Hey It\'s fourth!!!', likeCount: 1},
]

ReactDOM.render(<App  dialogs={dialogs}
                      dialogsMessages={dialogsMessages}
                      profilePosts={profilePosts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
