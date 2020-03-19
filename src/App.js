import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const ctr = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: ctr });
  };
  handleReset = () => {
    const ctr = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: ctr });
  };
  handleIncrement = counter => {
    console.log("before ", counter);
    const ctr = this.state.counters.map(c => {
      if (c.id === counter.id) c.value += 1;
      return c;
    });
    this.setState({ counters: ctr });
    console.log("after ", counter);
  };
  // handleCounterAddition = () => {
  //   const elem = { id: this.getNewId(), value: 0 };
  //   let coun = { ...this.state.counters, elem };
  //   //coun.push({ id: this.getNewId(), value: 0 });
  //   this.setState({ counters: coun });
  // };
  // getNewId = () => {
  //   let last = 0;
  //   const ctr = this.state.counters.map(c => {
  //     last = c.id;
  //     return c;
  //   });
  //   return last + 1;
  // };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            onAddingACounter={this.handleCounterAddition}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
