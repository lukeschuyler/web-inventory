import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  login(e) {
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
        <form onSubmit={this.login} className="container log-form">
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
          <div className="btn-container row">
            <div className="col-xs-3 col-xs-offset-5">
              <input className="btn btn-warning" type="submit" value="Login"/>
              <Link className="btn btn-success" to={'/register'} >Register</Link>
            </div>
          </div>
      </form>
    </div>
    );
  }
}

export default Login
