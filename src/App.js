import React from 'react';
import './App.css';
import Header from "./components/header/header.js";
import Navbar from "./components/navbar/navbar.js";
import Profile from "./components/Profile/profile.js";
import Dialogs from "./components/dialogs/dialogs.js";
import {Route, BrowserRouter} from "react-router-dom";

function App(props) {



  return (
  <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
          <div className = "blockout">
            <Route path="/dialogs" render = { () => <Dialogs dialogsdata={props.dialogsdata} messagedata={props.messagedata}/>} />
            <Route path="/profile" render = { () => <Profile postData={props.postData} />} />
          </div>
        
      </div>
    </BrowserRouter>

  );
}

export default App;
