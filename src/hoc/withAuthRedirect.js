import React from "react"
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"

export const withAuthRedirect = (Component) => {
  const withAuthRedirectComponent = (props) => {
    if (!props.isAuth) return <Redirect to={`/Login`}/>
    return <Component {...props}/>
  }
  const mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
  }
  return connect(mapStateToProps)(withAuthRedirectComponent)
}