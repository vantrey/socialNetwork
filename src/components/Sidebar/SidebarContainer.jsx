import React from 'react';
import styles from './Sidebar.module.css';
import Friend from "./Friend/Friend";
import Sidebar from "./Sidebar"

const SidebarContainer = (props) => {
  const sidebar = props.store.getState().sidebar
  return (
    <Sidebar sidebar={sidebar}/>
  )
}

export default SidebarContainer;