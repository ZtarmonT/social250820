import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import state from "./redux/state.js";
import {addPost, updateNewPostText} from "./redux/state.js";
import { BrowserRouter} from "react-router-dom";

export let renderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );

}



