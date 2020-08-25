import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
  {id: 1, message: "Hi wats upewrwrwe?1", likesCount: 12},
  {id: 1, message: "Hi wats upewrwrwe?2", likesCount: 12},
  {id: 1, message: "Hi wats upewrwrwe?3", likesCount: 12},
  {id: 2, message: "Mazafaka111", likesCount: 14}
]

let dialogsdata = [
  {id: 1, name: 'Tany11a'},
  {id: 32, name: 'Ilon'},
  {id: 12, name: 'Sasha'},
  {id: 21, name: 'Sonya'},
  {id: 143, name: 'Lana'}
];
let messagedata = [
  {id: 1, message: 'message111'},
  {id: 22, message: 'message2'},
  {id: 133, message: 'message3'},
  {id: 2144, message: 'message4'},
  {id: 14355, message: 'message5'}
];


ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogsdata={dialogsdata} messagedata={messagedata} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
