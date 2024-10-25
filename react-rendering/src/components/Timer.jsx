import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = { secondsRemaining: 120 };
    this.intervalId = undefined;

    this.tick = this.tick.bind(this);
  }

  tick() {
    if (this.state.secondsRemaining <= 0) return;

    this.setState((prevState) => ({
      secondsRemaining: prevState.secondsRemaining - 1,
    }));
  }

  componentDidMount() {
    console.log("Timer: Class Component mounted...");

    this.intervalId = setInterval(this.tick, 1000);
  }

  componentDidUpdate() {
    console.log("Timer: Class COmponent updated...");
  }

  componentWillUnmount() {
    console.log("Timer: Class Component will unmount...");

    clearInterval(this.intervalId);
  }

  render() {
    const minutes = Math.floor(this.state.secondsRemaining / 60);
    const seconds = this.state.secondsRemaining % 60;

    return (
      <div>
        {minutes < 10 ? `0${minutes}` : minutes} :{" "}
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
    );
  }
}
