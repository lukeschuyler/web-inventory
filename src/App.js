/* eslint-disable */

import React, { Component } from 'react';
import { Navbar, NavItem, MenuItem, NavDropdown, Nav } from 'react-bootstrap'
import Headroom from 'react-headroom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class App extends Component {
  render(props) {
    return (
      <div>
      <ToastContainer hideProgressBar={true} autoClose={2000} className="t-main" />
          <Navbar inverse className="app-nav">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Simply Managed</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="/sessions">Sessions</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={2} href="/products">View Products</NavItem>
              <NavItem eventKey={2} href="/products/search">Search Products</NavItem>
            </Nav>
          </Navbar>
        { this.props.children }
      </div>
    )
  }
}

export default App;
