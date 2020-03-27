import React from 'react';
import {connect} from "react-redux"
import Sidebar from "./Sidebar"

/*const SidebarContainer = (props) => {
  const sidebar = props.store.getState().sidebar
  return (
    <Sidebar sidebar={sidebar}/>
  )
}*/

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar
  }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar)

export default SidebarContainer