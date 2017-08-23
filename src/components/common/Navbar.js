// import React from 'react';
// import { Route, Link } from "react-router-dom";

// const Navbar = (props) => {
//     return (
//         <Link to="/" className="navbar">Home</Link>
//     );
// };

// export default Navbar

import React, { Component } from 'react';
import { Link } from 'react-router';
import '../../../public/css/bootstrap.css';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Mentor Connection</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
           <Link to="/special">Mentor</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><button className="btn btn-info log">Log In</button></li>
          <li><button className="btn btn-danger log">Log out </button></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;