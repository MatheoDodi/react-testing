import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  countHandler = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.countHandler} data-testid="counter-button">
          {count}
        </button>
      </div>
    );
  }
}

export default Counter;
