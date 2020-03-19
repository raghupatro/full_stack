import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn-sm btn-primary m-2">
          Reset
        </button>
        {/* <button
          onClick={this.props.onAddingACounter}
          className="btn-primary m-2"
        >
          Add an item
        </button> */}
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
