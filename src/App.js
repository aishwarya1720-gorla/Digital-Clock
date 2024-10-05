import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.clock = React.createRef(); // Create a ref for the clock display
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      this.clock.current.innerText = timeString; // Update the clock DOM directly
    }, 1000); // Update every second
  }

  render() {
    return (
      <div>
        <h1 ref={this.clock} id="time">00:00:00</h1>
      </div>
    );
  }
}

export default Clock;


