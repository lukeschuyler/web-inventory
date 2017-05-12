/* eslint-disable */

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


class Receiving extends Component {
  constructor(props) {
    super();
    this.state = {
      recSessions: []
    }
  }

  componentDidMount() {
    axios.get(`https://inventory-manager-ls.herokuapp.com/api/v1/receiving_sessions`)
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
      this.setState({wasteSessions: res.data})
    })
  }

  colFormatter(cell, row) {
    return (
      <Link to={'/waste/' + row.id}>
        View
      </Link>
    )
  }

  render() {
    let wasteSessions = this.state.wasteSessions
  return (
    <div className="container">
      <h2>Waste Sessions</h2>
      <hr />
      <BootstrapTable data={wasteSessions} striped={ true } hover={ true } condensed={ true } scrollTop={'Bottom'}>
          <TableHeaderColumn dataSort={true} width="100" isKey dataField='id'>Session ID</TableHeaderColumn>
          <TableHeaderColumn dataSort={true} filter={ { type: 'RegexFilter', delay: 200 } } dataField='date'>Session Date</TableHeaderColumn>
          <TableHeaderColumn dataSort={true} filter={ { type: 'RegexFilter', delay: 200 } } dataField='username'>User</TableHeaderColumn>
          <TableHeaderColumn dataSort={true} dataField dataFormat={ this.colFormatter }>View Session</TableHeaderColumn>
      </BootstrapTable>
    </div>
    )
  }
}

export default Waste;
