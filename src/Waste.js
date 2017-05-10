/* eslint-disable */

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


class Waste extends Component {
  constructor(props) {
    super();
    this.state = {
      wasteSessions: []
    }
  }

  componentDidMount() {
    axios.get(`https://inventory-manager-ls.herokuapp.com/api/v1/waste_sessions`)
    .then(res => {
      res.data.forEach(session => {
        session.date = new Date(session.date).toDateString()
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
      <BootstrapTable data={wasteSessions} striped={ true } hover={ true } condensed={ true } scrollTop={'Bottom'}>
          <TableHeaderColumn isKey dataField='id'>Session ID</TableHeaderColumn>
          <TableHeaderColumn dataField='date'>Session Date</TableHeaderColumn>
          <TableHeaderColumn dataField='username'>User</TableHeaderColumn>
          <TableHeaderColumn dataField dataFormat={ this.colFormatter }>View Session</TableHeaderColumn>
      </BootstrapTable>
    </div>
    )
  }
}

export default Waste;
