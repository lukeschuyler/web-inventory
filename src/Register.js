import React from 'react'

const Register = ({ email, password, passCheck, onChangeEmail, onChangePass, onChangePassCheck }) => 
  (
    <form className="container">
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
      <div className="form-group row">
        <label for="example-search-input" className="col-xs-offset-4 col-xs-1 col-form-label">Password</label>
        <div className="col-xs-3">
          <input onChange={onChangePassCheck} className="form-control" type="password" value={passCheck} id="example-search-input" />
        </div>
      </div>
    </form>
  )

export default Register
