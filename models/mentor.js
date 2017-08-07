var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Mentor = new Schema({
  FName:{
    type: String
  },
  LName:{
    type:String
  },
  city:{
    type:String
  },
  state:{
    type:String
  },
  email:{
    type:String
  }
});

var Mentor = mongoose.model("Mentor", Mentor);

module.exports = Mentor;