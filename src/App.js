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

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='appWrapper'>
        <Header/>
        <Navbar/>
        <div className='appWrapperContent'>
          <Route /*exact*/ path='/dialogs' render={() => <Dialogs dialogs={props.dialogs}
                                                                  dialogsMessages={props.dialogsMessages}/>}/>

          <Route path='/Profile' render={() => <Profile profilePosts={props.profilePosts}/>}/>
          <Route path='/Music' render={() => <Music/>}/>
          <Route path='/News' render={() => <News/>}/>
          <Route path='/Settings' render={() => <Settings/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
