import React, { Component } from 'react';

class WasteSession extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h2>Waste Session  {this.props.match.params.session}</h2>
        </div>
      </div>
    );
  }
}

export default WasteSession;
