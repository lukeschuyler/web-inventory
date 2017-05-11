/* eslint-disable */

import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class Inventory extends Component {
  constructor(props) {
    super();
    this.state = {
      invSessions: []
    }
  }

  componentDidMount() {
    axios.get(`https://inventory-manager-ls.herokuapp.com/api/v1/inv_sessions`)
    .then(res => {
      res.data.forEach(session => {
        let newDate = new Date(session.date)
        let time = newDate.getHours() + ': ' + newDate.getMinutes()
        console.log(newDate.getHours())
        session.date = newDate.toDateString() + ' ' + time
      })
      this.setState({invSessions: res.data})
      // console.log(res.data)
    })
  }

  colFormatter(cell, row) {
    return (
      <Link to={'/inventory/' + row.id}>
        View
      </Link>
    )
  }

  render() {
    let invSessions = this.state.invSessions
    return (
    <div className="container">
      <BootstrapTable data={invSessions} striped={ true } hover={ true } >
          <TableHeaderColumn dataSort={true} width="100" isKey dataField='id'>Session ID</TableHeaderColumn>
          <TableHeaderColumn dataSort={true} dataField='date'>Session Date</TableHeaderColumn>
          <TableHeaderColumn dataSort={true} dataField='username'>User</TableHeaderColumn>
          <TableHeaderColumn dataSort={true} dataFormat={ this.colFormatter }>View Session</TableHeaderColumn>
      </BootstrapTable>
    </div>
    );
  }
}

export default Inventory;
