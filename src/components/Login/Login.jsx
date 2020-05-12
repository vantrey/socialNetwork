import React from "react"
import {Field, reduxForm} from "redux-form"
import {connect} from "react-redux"
import {login, logout} from "../../redux/authReducer"

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={`input`} type={`text`} name={`email`} placeholder={`e-mail`}/>
      </div>
      <div>
        <Field component={`input`} type={`text`} name={`password`} placeholder={`password`}/>
      </div>
      <div>
        <Field component={`input`} type={`checkbox`} name={`rememberMe`}/> Remember me
      </div>
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
    //  props.logout()
    console.log(formData)
  }
  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}
export default connect(null, {login, logout})(Login)