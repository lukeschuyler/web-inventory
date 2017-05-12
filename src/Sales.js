/* eslint-disable */

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


class Receiving extends Component {
  constructor(props) {
    super();
    this.state = {
      salesSessions: []
    }
  }

  componentDidMount() {
    axios.get(`https://inventory-manager-ls.herokuapp.com/api/v1/sales_sessions`)
    .then(res => {
      res.data.forEach(session => {
        let newDate = new Date(session.date)
        let hours = newDate.getHours()
        let minutes = newDate.getMinutes()
        minutes < 10 ? minutes = 0 + minutes : minutes = minutes
        let time;
        if (newDate.getHours() < 12) {
         time = hours + ':' + minutes + ' AM' 
        } else {
         time = hours - 12 + ':' + minutes + ' PM'
        }
        session.date = newDate.toDateString() + ' ' + time
      })
      this.setState({salesSessions: res.data})
    })
  }

  colFormatter(cell, row) {
    return (
      <Link to={'/sales/' + row.id}>
        View
      </Link>
    )
  }

  render() {
  let salesSessions = this.state.salesSessions
  return (
    <div className="container">
      <h2>Sales Sessions</h2>
      <hr />
      <BootstrapTable data={salesSessions} striped={ true } hover={ true } condensed={ true } scrollTop={'Bottom'}>
          <TableHeaderColumn dataSort={true} width="100" isKey dataField='id'>Session ID</TableHeaderColumn>
          <TableHeaderColumn dataSort={true} filter={ { type: 'RegexFilter', delay: 200 } } dataField='date'>Session Date</TableHeaderColumn>
          <TableHeaderColumn dataSort={true} filter={ { type: 'RegexFilter', delay: 200 } } dataField='username'>User</TableHeaderColumn>
          <TableHeaderColumn dataSort={true} dataField dataFormat={ this.colFormatter }>View Session</TableHeaderColumn>
      </BootstrapTable>
    </div>
    )
  }
}

export default Sales;
