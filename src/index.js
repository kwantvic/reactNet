import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    { id: 1, name: "Dimich" },
    { id: 2, name: "Victor" },
    { id: 3, name: "Petya" },
    { id: 4, name: "Olya" },
    { id: 5, name: "Sveta" },
    { id: 6, name: "Augustin" }
]

let messages = [
    { id: 1, textMessage: "Hi" },
    { id: 2, textMessage: "How are you?" },
    { id: 3, textMessage: "Yo!" }
]

let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 5 },
    { id: 2, message: "It's my first post!!!", likesCount: 16 }
]

ReactDOM.render(<App dialogs={dialogs} messages={messages} posts={posts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
