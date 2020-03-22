import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer"

const App = (props) => {
  return (
    <div className='appWrapper'>
      <Header/>
      <Navbar sidebar={props.state.sidebar}/>
      <div className='appWrapperContent'>
        <Route path='/Profile' render={() =>
          <Profile store={props.store}/>}
        />
        <Route /*exact*/ path='/dialogs' render={() =>
          <DialogsContainer store={props.store}/>}
        />
        <Route path='/Music' render={() => <Music/>}/>
        <Route path='/News' render={() => <News/>}/>
        <Route path='/Settings' render={() => <Settings/>}/>
      </div>
    </div>
  );
}

export default App;
