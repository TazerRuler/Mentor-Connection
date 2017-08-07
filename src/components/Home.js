import React from 'react';
import '../../public/css/mentorConnection.css';
import '../../public/css/bootstrap.css';
import Youtube from './Youtube';
import Books from './Books';
import Navbar from './common/Navbar';
import Mentor from '../../public/images/Mentor.jpg'

console.log(Navbar)
const Home =(props) => {
    return (

      <div className="App">

      <Navbar />

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

        <div className="bgColor1">
          <div className="row">
            <Youtube />
          </div>
        </div>

        <div className="bgColor1">
          <div className="row">
            <Books />
          </div>
        </div>


      </div>
    );
}

export default Home;
