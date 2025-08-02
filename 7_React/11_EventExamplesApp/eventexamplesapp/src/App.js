import React, { Component } from 'react';
import CurrencyConverter from './CurrencyConverter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  sayHello = () => {
    alert("Hello World, How are you!");
  };

  handleMultiple = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (message) => {
    alert(message);
  };

  handleSyntheticEvent = (e) => {
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ margin: '20px' }}>

        <p>{this.state.count}</p>
        <button onClick={this.handleMultiple}>Increment</button>
        <br />

        <button onClick={() => this.decrement()}>Decrement</button>
        <br />

        <button onClick={() => this.sayWelcome("Welcome")}>Say Welcome</button>
        <br />

        <button onClick={this.handleSyntheticEvent}>Click on me</button>

        <br /><br />
        <CurrencyConverter />
      </div>
    );
  }
}

export default App;
