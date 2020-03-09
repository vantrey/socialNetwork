import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
      <div className='appWrapper'>
        <Header/>
        <Navbar sidebar={props.state.sidebar}/>
        <div className='appWrapperContent'>
          <Route path='/Profile' render={() =>
            <Profile
              postTextUpd={props.postTextUpd}
              addNewPost={props.addNewPost}
              profilePage={props.state.profilePages}
            />}
          />
          <Route /*exact*/ path='/dialogs' render={() =>
            <Dialogs
              dialogMsgUpd={props.dialogMsgUpd}
              addNewDialogsMsg={props.addNewDialogsMsg}
              dialogsPage={props.state.dialogsPage}
            />}
          />
          <Route path='/Music' render={() => <Music/>}/>
          <Route path='/News' render={() => <News/>}/>
          <Route path='/Settings' render={() => <Settings/>}/>
        </div>
      </div>
  );
}

export default App;
