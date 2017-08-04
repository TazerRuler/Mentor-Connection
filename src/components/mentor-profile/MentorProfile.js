import React, { Component } from 'react';
import '../../public/css/mentorConnection.css';
import '../../public/css/bootstrap.css';
import Mentor1 from '../../public/images/mentor1.jpg';
import BeAMentor from '../../public/images/be-a-mentor.jpg';




class MentorProfile extends Component {
  render() {
    return (

      <div className="App">
        
        <div>
          <img src={Mentor1} rounded alt="mentor" />
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

        <div>
          <img src={BeAMentor} className="img-style" alt="mentor" />
        </div>

      </div>
    );
  }
}

export default MentorProfile;
