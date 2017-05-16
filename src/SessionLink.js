import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const SessionLink = ({ label, to }) => (
  <Route path={to} children={({ match_two }) => (
    <div className={match_two ? 'active-link' : ''}>
      <Link to={to}>{label}</Link>
    </div>
  )}/>
)

export default SessionLink
