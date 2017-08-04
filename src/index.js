import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MentorProfile from './components/mentor-profile/MentorProfile';



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <MentorProfile />,
  document.getElementById('mentorRoot')
);
