import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <div>
        <div className="home-container container">
          <div className="logo-container">
            <h1 className="logo">Simply Managed.</h1>
          </div>
        </div>
        <form className="container">
          <div className="form-group row">
            <label for="example-text-input" className="col-xs-offset-4 col-xs-1 col-form-label">Email</label>
            <div className="col-xs-3">
              <input onChange={(e) => { this.setState({email: e.target.value}) }} className="form-control" type="email" value={this.state.email} id="example-text-input" />
            </div>
          </div>
          <div className="form-group row">
            <label for="example-search-input" className="col-xs-offset-4 col-xs-1 col-form-label">Password</label>
            <div className="col-xs-3">
              <input onChange={(e) => { this.setState({password: e.target.value}) }} className="form-control" type="password" value={this.state.password} id="example-search-input" />
            </div>
          </div>
          <div className="form-group row">
            <label for="example-search-input" className="col-xs-offset-4 col-xs-1 col-form-label">Confirm Password</label>
            <div className="col-xs-3">
              <input onChange={(e) => { this.setState({passCheck: e.target.value}) }} className="form-control" type="password" value={this.state.passCheck} id="example-search-input" />
            </div>
          </div>
      </form>
    </div>
    );
  }
}

export default Register
