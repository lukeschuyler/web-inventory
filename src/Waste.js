/* eslint-disable */

import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import axios from 'axios'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import WasteSession from './WasteSession.js'


class Waste extends Component {
  constructor(props) {
    super();
    this.state = {
      wasteSessions: []
    }
    this.colFormatter = this.colFormatter.bind(this)
  }

  componentWillMount() {
    axios.get(`https://inventory-manager-ls.herokuapp.com/api/v1/waste_sessions`)
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
      this.setState({wasteSessions: res.data})
    })
  }

  colFormatter(cell, row) {
    return (
      <div>
        <Link to={`${this.props.match.url}/${row.id}`}>
          View
        </Link>
      </div>
    )
  }

  render() {
    let wasteSessions = this.state.wasteSessions
    return (
      <div>
        <Route exact path={this.props.match.url} render={() => (
          <div className="container">
            <h1>Waste Sessions</h1>
            <BootstrapTable data={wasteSessions} multiColumnSearch={ true } striped={ true } hover={ true } condensed={ true } scrollTop={'Bottom'}>
                <TableHeaderColumn dataSort={true} width="100" isKey dataField='id'>Session ID</TableHeaderColumn>
                <TableHeaderColumn dataSort={true} filter={ { type: 'RegexFilter', delay: 200 } } dataField='date'>Session Date</TableHeaderColumn>
                <TableHeaderColumn dataSort={true} filter={ { type: 'RegexFilter', delay: 200 } } dataField='username'>User</TableHeaderColumn>
                <TableHeaderColumn dataSort={true} dataField dataFormat={ this.colFormatter }>View Session</TableHeaderColumn>
            </BootstrapTable>
          </div>
        )}/>
        <Route path={`${this.props.match.url}/:session`} component={WasteSession} />
      </div>
      )
  }
}

export default Waste;
