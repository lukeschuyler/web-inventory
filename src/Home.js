import React, { Component } from 'react';
import Login from './Login'
import Register from './Register'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      login: true,
      register: false
    }
  }

  render() {
    if (this.state.login) {
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
                <input onChange={(e) => { this.setState({password: e.target.value}) }} className="form-control" type="password" value={this.state.Password} id="example-search-input" />
              </div>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default Home;
