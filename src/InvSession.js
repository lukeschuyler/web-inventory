import React, { Component } from 'react';

class InvSession extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h2>{this.props.match.params.session}</h2>
        </div>
      </div>
    );
  }
}

export default InvSession;
