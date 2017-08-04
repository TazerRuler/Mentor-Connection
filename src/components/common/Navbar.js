import React, { Component } from 'react';
import '../../../public/css/mentorConnection.css';
import '../../../public/css/bootstrap.css';


// set data

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li><a href="#">Home</a></li>
              </ul>
            </div>
          </div>
        </nav>
        );
  }
}

export default Navbar;
