import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export {getMentorData, getMenteeData};

function getMentorData() {
  const url = `${BASE_URL}/api/mentor-connection/mentors`;
  return axios.get(url).then(response => response.data);
}

function getMenteeData() {
  const url = `${BASE_URL}/api/mentor-connection/mentees`;
  return axios.get(url).then(response => response.data);
}


