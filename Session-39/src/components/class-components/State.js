import { Component } from "react";
import { createPortal } from "react-dom";

class State extends Component {
  constructor() {
    super();
    console.log("Constructor is Called");
    this.state = {
      count: 0,
    };
  }

  updateCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  componentDidMount() {
    console.log("componentDidMount is called");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps is called");
    return null;
  }

  shouldComponentUpdate(nextprops, nextstate) {
    console.log("shouldcomponentupdate", nextstate);
    console.log("shouldComponentupdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log("getsnapshotbeforeupdate");
    return null;
  }
  componentDidUpdate() {
    //network logic/asynchronous
    console.log("componentdidupdate is called");
  }

  componentWillUnmount() {
    console.log("componentwillunmount is called");
  }

  render() {
    console.log("render is called");
    return (
      <div style={{ textAlign: "center" }}>
        <h2>State Concept</h2>
        {createPortal(
          <h1>Another Root Element</h1>,
          document.getElementById("myroot")
        )}
        <p>Count Value is {this.state.count}</p>
        <button onClick={this.updateCount}>Increase Count</button>
      </div>
    );
  }
}

export default State;
