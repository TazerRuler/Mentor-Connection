import React from 'react';
import '../../public/css/mentorConnection.css';
import '../../public/css/bootstrap.css';
import Youtube from './Youtube';
import Books from './Books';



const App =(props) => {
    return (

      <div className="App">
  
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

export default App;
