import React from "react"
import {Field, reduxForm} from "redux-form"
import {connect} from "react-redux"
import {login, logout} from "../../redux/authReducer"
import {required} from "../../utils/validators"
import {Input} from "../common/FormsControls/FormsControls"

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input} type={`text`} name={`email`} placeholder={`e-mail`} validate={[required]}/>
      </div>
      <div>
        <Field component={Input} type={`text`} name={`password`} placeholder={`password`} validate={[required]}/>
      </div>
      <div>
        <Field component={Input} type={`checkbox`} name={`rememberMe`}
        /> Remember me
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