import axios from "axios";

const mentorAPI = {
  // Retrieves all quotes from the db
  getMentor: function() {
    return axios.get("/api/mentor");
  },
  // Saves a new quote to the db
  saveMentor: function(text) {
    return axios.post("/api/mentor", { text });
  },
  // Deletes a quote from the db
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