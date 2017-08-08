import axios from "axios";

const mentorAPI = {
  // Retrieves all mentors from the db
  getMentor: function() {
    return axios.get("/api/mentor");
  },
  // Saves a new mentor to the db
  saveMentor: function(text) {
    return axios.post("/api/mentor", { text });
  },
  // Deletes a mentor from the db
  deleteMentor: function(id) {
    return axios.delete(`/api/mentor/${id}`);
  },
  // Toggles a quote's favorite property in the db
  // favoriteMentor: function(quote) {
  //   mentor.favorited = !mentor.favorited;
  //   const { _id, favorited } = mentor;
  //   return axios.patch(`/api/mentor/${_id}`, { favorited });
  // }
};

export default mentorAPI;