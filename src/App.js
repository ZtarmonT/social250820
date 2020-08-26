import React from 'react';
import './App.css';
import Header from "./components/header/header.js";
import Navbar from "./components/navbar/navbar.js";
import Profile from "./components/Profile/profile.js";
import Dialogs from "./components/dialogs/dialogs.js";
import {Route} from "react-router-dom";

function App(props) {



  return (
  
      <div className="App">
        <Header />
        <Navbar />
          <div className = "blockout">

            <Route path="/dialogs" render = { () => 
              <Dialogs state={props.appState.messagesPage} /> }/>

            <Route path="/profile" render = { () =>
              <Profile 
              profilePage={props.appState.profilePage} 
              addPost={props.addPost}
              updateNewPostText = {props.updateNewPostText} />} />
              
          </div>
        
      </div>
    

  );
}

export default App;
