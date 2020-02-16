import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <div className='appWrapper'>
        <Header/>
        <Navbar/>
        <div className='appWrapperContent'>
          <Route /*exact*/ path='/dialogs' component={Dialogs}/>
          <Route path='/Profile' component={Profile}/>
          <Route path='/Music' component={Music}/>
          <Route path='/News' component={News}/>
          <Route path='/Settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
