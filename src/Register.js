import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passCheck: ''
    }
  }

  register(e) {
    e.preventDefault()
    console.log('hey')
  }

  render() {
    return (
      <div>
        <div className="home-container container">
          <div className="logo-container">
            <h1 className="logo">Simply Managed.</h1>
          </div>
        </div>
        <form onSubmit={this.register} className="container log-form">
          <div className="form-group row">
            <label htmlFor="example-text-input" className="col-xs-offset-4 col-xs-1 col-form-label">Email</label>
            <div className="col-xs-3">
              <input onChange={(e) => { this.setState({email: e.target.value}) }} className="form-control" type="email" value={this.state.email} id="example-text-input" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-search-input" className="col-xs-offset-4 col-xs-1 col-form-label">Password</label>
            <div className="col-xs-3">
              <input onChange={(e) => { this.setState({password: e.target.value}) }} className="form-control" type="password" value={this.state.password} id="example-search-input" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-search-input" className="col-xs-offset-4 col-xs-1 col-form-label">Confirm Password</label>
            <div className="col-xs-3">
              <input onChange={(e) => { this.setState({passCheck: e.target.value}) }} className="form-control" type="password" value={this.state.passCheck} id="example-search-input" />
            </div>
          </div>
          <div className="btn-container row">
            <div className="col-xs-3 col-xs-offset-5">
              <input className="btn btn-login btn-warning" type="submit" value="Register"/>
              <Link className="btn btn-login btn-success" to={'/login'} >Back to Login</Link>
            </div>
          </div>
      </form>
    </div>
    );
  }
}

export default Register
