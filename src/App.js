import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import Login from "./components/Login/Login"
import {connect} from "react-redux"
import {initialiseApp} from "./redux/appReducer"
import Preloader from "./components/common/Preloader/Preloader"
import {compose} from "redux"

class App extends React.Component {
  componentDidMount() {
    this.props.initialiseApp()
  }

  render() {
    if (!this.props.isInitialised) {
      return <Preloader/>
    }
    return (
      <div className='appWrapper'>
        <HeaderContainer/>
        <Navbar/>
        <div className='appContent'>
          <Route path='/profile/:userId?'
                 render={() => <ProfileContainer/>}/>
          <Route path='/dialogs'
                 render={() => <DialogsContainer/>}/>
          <Route path='/music'
                 render={() => <Music/>}/>
          <Route path='/news'
                 render={() => <News/>}/>
          <Route path='/users'
                 render={() => <UsersContainer/>}/>
          <Route path='/settings'
                 render={() => <Settings/>}/>
          {<Route path='/login'
                  render={() => <Login/>}/>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isInitialised: state.app.isInitialised
})
export default compose(
    withRouter,
    connect(mapStateToProps, {initialiseApp}))(App);
