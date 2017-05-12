/* eslint-disable */

import React, { Component } from 'react';
import { Navbar, NavItem, MenuItem, NavDropdown, Nav } from 'react-bootstrap'
import Headroom from 'react-headroom'

class App extends Component {
  render(props) {
    return (
      <div>
          <Navbar className="app-nav">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Invent Simple</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="/sessions">Manage Sessions</NavItem>
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
