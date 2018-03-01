import React from 'react';
import CounterNumber from './CounterNumber'
import {incrementCounter} from '../actions/Counter.js'

// A React.js component is just a ES6 class extending React.Component
// It should implement at least the render method
class Counter extends React.Component {
  // You have a constructor receiving the props as parameters
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    //this.state = {numberOfClicks: 0}
  }
  
  handleChange(e) {
    //this.setState({numberOfClicks: this.state.numberOfClicks+1})
    this.props.dispatch(incrementCounter());
  }

  // The render method is called each time the state of component changes
  render() {
    // More info at https://reactjs.org/docs/jsx-in-depth.html
    return (
      <div>
        <CounterNumber clicks={this.props.numberOfClicks} />
        <button id="clicker" onClick={this.handleChange}>Increase me!</button>
      </div>
    );
  }
}

// Exporting the react component class to be included
export default Counter
