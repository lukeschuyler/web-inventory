import React, { Component } from 'react';

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
        </div>
      );
    }
  }
}

export default Home;
