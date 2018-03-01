import React from 'react';

class CounterNumber extends React.Component {
  // The render method is called each time the state of component changes
  render() {
    return (
      <h1>{this.props.clicks}</h1>
    );
  }
}

// Exporting the react component class to be included
export default CounterNumber
