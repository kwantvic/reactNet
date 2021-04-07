import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import {
  Input,
  createFeild,
} from '../common/Preloader/FormsControls/FormsControls'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import style from './../common/Preloader/FormsControls/FormsControls.module.css'

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
        {/* <Field
          placeholder={"Email"}
          name={"email"}
          validate={[required]}
          component={Input}
        /> */}
        {createFeild('Email', 'email', [required], Input)}
        {createFeild('Password', 'password', [required], Input, {type: 'password'})}
        {createFeild(null, 'rememberMe', [], Input, {type: 'checkbox'}, "remember me")}

        {error && <div className={style.formSummeryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm)

const Login = ({ login, isAuth }) => {
  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe)
  }

  if (isAuth) {
    return <Redirect to={'profile'} />
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)
