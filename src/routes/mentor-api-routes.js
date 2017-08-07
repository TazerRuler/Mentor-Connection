//require our models
var db = require("../models");

//export routes
module.exports = function(app){


//get everything in the reviews table and display it as json at the given route
app.get("/api/mentor",function(req,res){

  db.review.findAll({raw:true}).then(function(results){
    res.json(results);

    console.log(results);
  })


});



//posting an entry into the reviews table 
//check review.js for the sender side

app.post("/mentor", function(req,res){

  
  console.log(req.body);


  db.mentor.create({
    FName:req.body.firstName,
    LName: req.body.lastName,
    city: req.body.city,
    state: req.body.state,


  }).then(function(){
    res.json(results)
  });
})


};