import React, { Component } from 'react';

class Home extends Component {
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
            <label for="example-text-input" className="col-form-label">Email</label>
            <div className="col-xs-6">
              <input className="form-control" type="text" value="Artisanal kale" id="example-text-input" />
            </div>
          </div>
          <div className="form-group row">
            <label for="example-search-input" className="col-form-label">Password</label>
            <div className="col-xs-6">
              <input className="form-control" type="search" value="How do I shoot web" id="example-search-input" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Home;
