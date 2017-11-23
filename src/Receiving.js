/* eslint-disable */

import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import axios from 'axios'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import RecSession from './RecSession.js'
import SessionGeneral from './SessionGeneral.js'


class Receiving extends Component {
  constructor(props) {
    super();
    this.state = {
      recSessions: props.sessions
    }
    this.colFormatter = this.colFormatter.bind(this)
    this.dateFormatter = this.dateFormatter.bind(this)
  }

  componentWillUpdate(nextProps, nextState) {
    nextState.recSessions = nextProps.sessions;  
  }

  colFormatter(cell, row) {
    return (
      <Link to={`${this.props.match.url}/${row.id}`}>
        View
      </Link>
    )
  }

  dateFormatter(cell, row) {
    cell = new Date(cell)
    return `${('0' + (cell.getMonth() + 1)).slice(-2)}/${('0' + cell.getDate()).slice(-2)}/${cell.getFullYear()}`;
  }


  render() {
    let recSessions = this.state.recSessions
    return (
    <div>
      <Route exact path={this.props.match.url} render={(props) => (
      <div className="container">
        <BootstrapTable pagination className="table" exportCSV data={recSessions} striped={ true } hover={ true } multiColumnSearch={ true }>
            <TableHeaderColumn dataSort={true} width="100" isKey dataField='id'>Session ID</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} dataFormat={ this.dateFormatter } filter={ { type: 'RegexFilter' } }  dataField='date'>Session Date</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} filter={ { type: 'RegexFilter', delay: 200 } }  dataField='username'>User</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} dataFormat={ this.colFormatter }>View Session</TableHeaderColumn>
        </BootstrapTable>
      </div>
      )}/>
    <Route exact path={`${this.props.match.url}/:session`} render={(props) => (
      <SessionGeneral {...props}  sessionType='rec'  />
    )} />    </div>
    );
  }
}

export default Receiving;
