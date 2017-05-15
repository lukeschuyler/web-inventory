import React, { Component } from 'react';
import { Navbar, NavItem, MenuItem, NavDropdown, Nav, Breadcrumb } from 'react-bootstrap'
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
      console.log(this.state)
    })
  }

  render() {
    let match = this.props.match.url
      return (
        <div>
          <Breadcrumb className="container session-navbar">
            <Breadcrumb.Item eventKey={1} href={`${match}/waste`}><div className="darken nav-item waste-nav-item">Waste</div></Breadcrumb.Item>
            <Breadcrumb.Item eventKey={2} href={`${match}/inventory`}><div className="darken nav-item inv-nav-item">Inventory</div></Breadcrumb.Item>
            <Breadcrumb.Item eventKey={2} href={`${match}/sales`}><div className="darken nav-item sales-nav-item">Sales</div></Breadcrumb.Item>
            <Breadcrumb.Item eventKey={2} href={`${match}/receiving`}><div className="darken nav-item rec-nav-item">Receiving</div></Breadcrumb.Item>
          </Breadcrumb>
          <Route path={match} render={(props) => (
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
