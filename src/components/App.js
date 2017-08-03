import React, { Component } from 'react';
import '../../public/css/mentorConnection.css';
import '../../public/css/bootstrap.css';
import Mentor from '../../public/images/Mentor.jpg';
import Youtube from './Youtube';
import Books from './Books';



class App extends Component {
  render() {
    return (

      <div className="App">
        
        <div>
          <img src={Mentor} className="img-style" alt="mentor" />
        </div>

        <div className="container">
          <div className="row">
            <h2 className="h2text">Tutorials</h2>
            <h4 className="h4text">Select tutorials from a series of languages.</h4>
            <Youtube />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <Books />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
