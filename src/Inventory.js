/* eslint-disable */

import React, { Component } from 'react';
import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import InvSession from './InvSession.js'

class Inventory extends Component {
  constructor(props) {
    super();
    this.state = {
      invSessions: []
    }
    this.colFormatter = this.colFormatter.bind(this)
  }

  componentWillMount() {
    axios.get(`https://inventory-manager-ls.herokuapp.com/api/v1/inv_sessions`)
    .then(res => {
      res.data.forEach(session => {
        let newDate = new Date(session.date)
        let hours = newDate.getHours()
        let minutes = newDate.getMinutes()
        minutes < 10 ? minutes = '0' + minutes : minutes = minutes
        let time;
        if (newDate.getHours() < 12) {
         time = hours + ':' + minutes + ' AM' 
        } else {
         time = hours - 12 + ':' + minutes + ' PM'
        }
        session.date = newDate.toDateString() + ' ' + time
      })
      this.setState({invSessions: res.data})
    })
  }

  colFormatter(cell, row) {
    return (
      <Link to={`${this.props.match.url}/${row.id}`}>
        View
      </Link>
    )
  }

  render() {
    let invSessions = this.state.invSessions
    return (
    <div>
      <Route exact path={this.props.match.url} render={() => (
      <div className="container">
        <BootstrapTable data={invSessions} striped={ true } hover={ true } >
            <TableHeaderColumn dataSort={true} width="100" isKey dataField='id'>Session ID</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} dataField='date'>Session Date</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} dataField='username'>User</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} dataFormat={ this.colFormatter }>View Session</TableHeaderColumn>
        </BootstrapTable>
      </div>
      )}/>
    <Route path={`${this.props.match.url}/:session`} component={InvSession} />
    </div>
    );
  }
}

export default Inventory;
