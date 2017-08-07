var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var menteeSchema = new Schema({
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

var Mentee = mongoose.model("Mentee", menteeSchema);

module.exports = Mentee;
