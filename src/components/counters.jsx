import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 8 },
      { id: 2, value: 0 },
      { id: 3, value: 7 },
      { id: 4, value: 0 },
      { id: 5, value: 9 }
    ]
  };
  handleDelete = counterId => {
    const ctr = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: ctr });
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
