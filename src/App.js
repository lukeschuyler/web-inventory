/* eslint-disable */

import React, { Component } from 'react';
import './App.css';
import { Navbar, NavItem, MenuItem, NavDropdown, Nav } from 'react-bootstrap'

class App extends Component {
  render(props) {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Invent Simple</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/waste">View Waste</NavItem>
            <NavItem eventKey={2} href="/inventory">View Inventory</NavItem>
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
