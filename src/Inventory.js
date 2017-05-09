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

  componentWillMount() {
    axios.get(`https://inventory-manager-ls.herokuapp.com/api/v1/inv_sessions`)
    .then(res => {
      res.data.forEach(session => {
        session.date = new Date(session.date).toDateString()
      })
      this.setState({invSessions: res.data})
      console.log(res.data)
    })
  }

  colFormatter(cell, row) {
    return (
      <Link to={'inventory/' + row.id}>
        View
      </Link>
    )
  }

  render() {
    let invSessions = this.state.invSessions
    return (
    <div className="container">
      <BootstrapTable data={invSessions} striped={ true } hover={ true } condensed={ true } scrollTop={'Bottom'}>
          <TableHeaderColumn isKey dataField='id'>Session ID</TableHeaderColumn>
          <TableHeaderColumn dataField='date'>Session Date</TableHeaderColumn>
          <TableHeaderColumn dataField='username'>User</TableHeaderColumn>
          <TableHeaderColumn dataField dataFormat={ this.colFormatter }>View Session</TableHeaderColumn>
      </BootstrapTable>
    </div>
    );
  }
}

export default Inventory;
