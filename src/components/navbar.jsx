import React from "react";

// stateless functional component
//they need props to be passed as an argument
//as they do not have access to this.props because sfc is a "function"

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <button className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </button>
      </a>
    </nav>
  );
};

export default NavBar;
