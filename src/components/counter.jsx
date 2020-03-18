import React, { Component } from "react";
//there are no if-else in jsx part
//the part inside return() where we have written in html is jsx
//the rest of the document is javaScript so it has if-else
class Counter extends Component {
  //state is a special object of a class which stores variables or/and objects related to the class

  state = {
    value: this.props.counter.value
  };
  // constructor() {
  //   super();
  //   this.increment = this.increment.bind(this);
  // }

  //   this will give a React.createElement() when the
  //   jsx will be converted to javaScript by the babel which will be
  //   rendered to the main index.html file

  // {/*curly braces allow to add javaScript expressions,
  //  "this" refers to the current object */}

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.increment({ id: this.props.id });
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        {/*this.state.tags.length === 0 && <h1>please create a new tag !</h1>}
        {this works as an if statement
        javascript converts string to true-sy or false-sy any string with 
        one or more characters is true-sy
        and then it return either last true-sy or last false-sy accordingly */}

        <button
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
          className="btn btn-danger btn-primary m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  /*the arrow function helps us by binding this automatically
  or else we can use the constructor and then bind*/
  increment = product => {
    console.log("clicked", product.id);
    this.setState({ value: this.state.value + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  // formatCount() {
  //   //const { value } = this.state; //peeking the "value" from this.state
  //   return this.state.value === 0 ? "zero" : this.state.value;
  // }
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
