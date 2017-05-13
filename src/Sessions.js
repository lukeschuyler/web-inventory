import React, { Component } from 'react';
import { Navbar, NavItem, MenuItem, NavDropdown, Nav } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import Sales from './Sales.js'
import Receiving from './Receiving.js'
import Inventory from './Inventory'
import Waste from './Waste'
import axios from 'axios'


class Sessions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      invSessions: [],
      wasteSessions: [],
      salesSessions: [],
      recSessions: [],
      loading: true
    }
  }

  componentDidMount() {
    axios.get(`https://inventory-manager-ls.herokuapp.com/api/v1/all_sessions`)
    .then(res => {
      this.setState({
        invSessions: res.data.inv, 
        wasteSessions: res.data.waste, 
        salesSessions: res.data.sales, 
        recSessions: res.data.rec, 
        loading: false
      })
    })
  }

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
          <Route exact path={match} render={(props) => (
            <div>
            { this.props.children }
            </div>
          )}/>
           <Route path={`${match}/sales`} render={(props) => (
              <Sales { ...props } sessions={this.state.salesSessions} />
           )} />
           <Route path={`${match}/receiving`} render={(props) => (
              <Receiving { ...props } sessions={this.state.recSessions} />
           )} />
           <Route path={`${match}/waste`} render={(props) => (
              <Waste { ...props } sessions={this.state.wasteSessions} />
           )} />
           <Route path={`${match}/inventory`} render={(props) => (
              <Inventory { ...props } sessions={this.state.invSessions} />
           )} />
        </div>
      );   
  }
}

export default Sessions;
