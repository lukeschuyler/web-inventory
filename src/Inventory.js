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
        let date = new Date(session.date)
        let newDate = date.getMonth() + 1 + '/' + date.getDate() + '/' +  date.getFullYear()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        minutes < 10 ? minutes = '0' + minutes : minutes = minutes
        let time;
        if (date.getHours() < 12) {
         time = hours + ':' + minutes + ' AM' 
        } else {
         time = hours - 12 + ':' + minutes + ' PM'
        }
        session.date = '0' + newDate 
        session.time = time
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
            <TableHeaderColumn dataSort={true} filter={ { type: 'DateFilter' } } dataField='date'>Session Date</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} dataField='time'>Session Time</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} filter={ { type: 'RegexFilter', delay: 200 } }  dataField='username'>User</TableHeaderColumn>
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
