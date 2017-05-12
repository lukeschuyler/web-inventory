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
        <Navbar className="session-navbar">
          <Nav className="session-nav">
            <NavItem activeClassName="active-link" eventKey={1} href={`${match}/waste`}><div className="nav-item waste-nav-item">Waste</div></NavItem>
            <NavItem activeClassName="active-link" eventKey={2} href={`${match}/inventory`}><div className="nav-item inv-nav-item">Inventory</div></NavItem>
            <NavItem activeClassName="active-link" eventKey={2} href={`${match}/sales`}><div className="nav-item sales-nav-item">Sales</div></NavItem>
            <NavItem activeClassName="active-link" eventKey={2} href={`${match}/receiving`}><div className="nav-item rec-nav-item">Receiving</div></NavItem>
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
