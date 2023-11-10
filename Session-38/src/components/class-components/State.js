import { Component } from "react";

class State extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  updateCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>State Concept</h2>
        <p>Count Value is {this.state.count}</p>
        <button onClick={this.updateCount}>Increase Count</button>
      </div>
    );
  }
}

export default State;
