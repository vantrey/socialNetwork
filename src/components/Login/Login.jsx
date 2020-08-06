import React from "react"
import {Field, reduxForm} from "redux-form"
import {connect} from "react-redux"
import {login} from "../../redux/authReducer"
import {required} from "../../utils/validators"
import {Input} from "../common/FormsControls/FormsControls"
import {Redirect} from "react-router-dom"
import styles from "./Login.module.css"

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Input} type={`text`} name={`email`} placeholder={`e-mail`} validate={[required]}/>
      </div>
      <div>
        <Field component={Input} type={`password`} name={`password`} placeholder={`password`} validate={[required]}/>
      </div>
      <div className={styles.rememberMe}>
        <Field component={Input} type={`checkbox`} name={`rememberMe`}
        /> <span>remember me</span>
      </div>
      {error &&
      <div className={styles.summaryError}>
        {error}
      </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
    console.log(formData)
  }
  if (props.isAuth) return <Redirect to={'/Profile'}/>
  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}
const mstp = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mstp, {login})(Login)