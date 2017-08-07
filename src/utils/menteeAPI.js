import axios from "axios";

const menteeAPI = {
  // Retrieves all quotes from the db
  getMentor: function() {
    return axios.get("/api/mentee");
  },
  // Saves a new quote to the db
  saveMentee: function(text) {
    return axios.post("/api/mentee", { text });
  },
  // Deletes a quote from the db
  deleteMentor: function(id) {
    return axios.delete(`/api/mentee/${id}`);
  },
  // Toggles a quote's favorite property in the db
  // favoriteMentor: function(quote) {
  //   mentee.favorited = !mentee.favorited;
  //   const { _id, favorited } = mentee;
  //   return axios.patch(`/api/mentee/${_id}`, { favorited });
  // }
};

export default menteeAPI;
