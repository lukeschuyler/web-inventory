import React, { Component } from 'react';
import { Navbar, NavItem, MenuItem, NavDropdown, Nav } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import Sales from './Sales.js'
import Receiving from './Receiving.js'
import Inventory from './Inventory'
import Waste from './Waste'


class Sessions extends Component {
  render() {
    let match = this.props.match.url
    return (
      <div>
        <Navbar>
          <Nav>
            <NavItem eventKey={1} href={`${match}/waste`}>Waste</NavItem>
            <NavItem eventKey={2} href={`${match}/inventory`}>Inventory</NavItem>
            <NavItem eventKey={2} href={`${match}/sales`}>Sales</NavItem>
            <NavItem eventKey={2} href={`${match}/receiving`}>Receiving</NavItem>
          </Nav>
        </Navbar>
        <Route exact path={match} render={() => (
          <div>
          { this.props.children }
          </div>
        )}/>
         <Route path={`${this.props.match.url}/sales`} component={Sales} />
         <Route path={`${this.props.match.url}/receiving`} component={Receiving} />
         <Route path={`${this.props.match.url}/waste`} component={Waste} />
         <Route path={`${this.props.match.url}/inventory`} component={Inventory} />
      </div>
    );
  }
}

export default Sessions;
