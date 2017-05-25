import React from 'react'
import { Link } from 'react-router-dom'

const Login = ({ email, password, onChangeEmail, onChangePass, login, goToReg }) => 
  (
    <form onSubmit={login} className="container">
      <div className="form-group row">
        <label for="example-text-input" className="col-xs-offset-4 col-xs-1 col-form-label">Email</label>
        <div className="col-xs-3">
          <input onChange={onChangeEmail} className="form-control" type="email" value={email} id="example-text-input" />
        </div>
      </div>
      <div className="form-group row">
        <label for="example-search-input" className="col-xs-offset-4 col-xs-1 col-form-label">Password</label>
        <div className="col-xs-3">
          <input onChange={onChangePass} className="form-control" type="password" value={password} id="example-search-input" />
        </div>
      </div>
      <div className="btn-container row">
        <div className="col-xs-3 col-xs-offset-5">
          <input className="btn btn-warning" type="submit" value="Login"/>
          <Link className="btn btn-success" to={'/register'} >Register</Link>
        </div>
      </div>
    </form>
  )

export default Login
