// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
var mongo = require('mongodb');
var bluebird = require("bluebird");
var routes = require("./routes/routes");


var PORT = process.env.PORT || 3001; // Sets an initial port. We'll use this later in our listener

// Create Instance of Express
var app = express();
mongoose.Promise = bluebird;
// Run Morgan for Logging
app.use(logger("dev"));

//body and cookie parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(express.static(__dirname + "/public"));
// app.use("/", routes);

//-----------------------
//MongoDB config

// mongoose.connect("mongodb://janettwalker:tminus987@ds157740.mlab.com:57740/mentor-connection");
// var db = mongoose.connection;

// db.on("error", function(err) {
//   console.log("Mongoose Error: ", err);
// });

// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// });



// //Routes for adding creating Mentor and Mentee
// //'''''''''''''''''''''''''''''''''''''''''''''''''

// //route to get all mentors
// app.get("/api/mentor", function(req, res) {
//   //get all Workout Collection
//   Mentor.find({}).exec(function(err, doc) {
//     if (err) {
//       console.log(err)
//     } else {
//       res.send(doc);
//     }
//   });
// });

// //route to get all mentors by creatorId
// app.get("/api/mentor/:creatorId", function(req, res) {
//   //get all Workout Collection
//   Mentor.find({"creatorId": req.params.creatorId}).exec(function(err, doc) {
//     if (err) {
//       console.log(err)
//     } else {
//       res.send(doc);
//     }
//   });
// });

// //route to get all mentees
// app.get("/api/mentee", function(req, res) {
//   //get all Workout Collection
//   Mentee.find({}).exec(function(err, doc) {
//     if (err) {
//       console.log(err)
//     } else {
//       res.send(doc);
//     }
//   });
// });

// //route to get all mentees by creatorId
// app.get("/api/mentee/:creatorId", function(req, res) {
//   //get all Workout Collection
//   Mentee.find({"creatorId": req.params.creatorId}).exec(function(err, doc) {
//     if (err) {
//       console.log(err)
//     } else {
//       res.send(doc);
//     }
//   });
// });




// //Routes for adding new Mentor and Mentee
// //'''''''''''''''''''''''''''''''''''''''''''''''''

// //route to post a new mentor
// app.post("/api/mentor", function(req, res) {
//   //make a new instance of mentor with the req.body
//   var newMentor = new Mentor(req.body);
//   console.log(req.body);
//   //save the new mentor
//   newMentor.save(function(err, doc) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(doc);
//     }
//   });
// });


// //route to post a new mentee
// app.post("/api/mentee", function(req, res) {
//   //make a new instance of mentor with the req.body
//   var newMentee = new Mentee(req.body);
//   console.log(req.body);
//   //save the new mentor
//   newMentee.save(function(err, doc) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(doc);
//     }
//   });
// });





// //Routes for deleting Mentor and Mentee
// //'''''''''''''''''''''''''''''''''''''''''''''''''


// //delete Mentor
// app.delete("/api/mentor/:id", function(req, res) {
//   var id = req.params.id

//   Mentor.find({_id: id}).remove().exec(function(err) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send("Deleted");
//     }
//   });
// });

// //delete Mentor
// app.delete("/api/mentee/:id", function(req, res) {
//   var id = req.params.id

//   Mentee.find({_id: id}).remove().exec(function(err) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send("Deleted");
//     }
//   });
// });



// //Routes for adding new Mentor and Mentee
// //'''''''''''''''''''''''''''''''''''''''''''''''''

// app.put("/api/mentor/:id", function(req, res) {
//   var id = req.params.id;
//   Mentor.findOne({
//     _id: id
//   }, function(err, foundObject) {
//     if (err) {
//       console.log(err);
//       res.status(500).send();
//     } else {
//       if (!foundObject) {
//         res.status(404).send();
//       } else {
//         foundObject.email = req.body.email
//       }
//     }
//   });
// });




// app.get("*", function(req, res) {
//   res.sendFile(__dirname + "/view/public/index.html");
// });

app.get('/api/mentor-connection/mentors', (req, res) => {
  let mentors = [
  {
    id: 001,
    name: "Jason Harding",
    languages: "Javascript, C#, ReactJS",
    city: "Charlotte",
    state: "NC",
    email: "jharding@email.com",
    image: "http://i1044.photobucket.com/albums/b447/janetwalker271989/christoph_zpstzaxxjh2.jpg"
  },
  {
    id: 002,
    name: "Christine Jenkins",
    languages: "Javascript, HTML, CSS",
    city: "Atlanta",
    state: "GA",
    email: "christinerocks@email.com",
    image: "http://i1044.photobucket.com/albums/b447/janetwalker271989/janna_zpsxfiva1sf.jpg"
  },
  {
    id: 003,
    name: "Steve Crimson",
    languages: "Angular, NodeJS",
    city: "New York",
    state: "NY",
    email: "crimsonsteve@email.com",
    image: "http://i1044.photobucket.com/albums/b447/janetwalker271989/steve_zpsojhym9zt.jpg"
  },
  {
    id: 004,
    name: "Akeeva Johnson",
    languages: "Javascript, ReactJS",
    city: "Jacksonville",
    state: "FL",
    email: "akeevava@email.com",
    image: "http://i1044.photobucket.com/albums/b447/janetwalker271989/ryanne_zpsgwxkuegz.jpg"
  }
  ];
  res.json(mentors);
})

app.get('/api/mentor-connection/mentees', (req,res) => {
  let mentees = [
  {
    id: 100,
    name: "Dwayne Gibson",
    languages: "Javascript, C#, ReactJS",
    city: "Charlotte",
    state: "NC",
    email: "jharding@email.com",
    image: "http://i1044.photobucket.com/albums/b447/janetwalker271989/kevin_zpsml7qxtxo.jpg"
  },
  {
    id: 200,
    name: "Helen Gibbs",
    languages: "Javascript, HTML, CSS",
    city: "Atlanta",
    state: "GA",
    email: "helengibbs@email.com",
    image: "http://i1044.photobucket.com/albums/b447/janetwalker271989/helen_zpsdc6kmacp.jpg"
  },
  {
    id: 300,
    name: "Lucas Hawkins",
    languages: "HTML, CSS",
    city: "New York",
    state: "NY",
    email: "lucasskywalker@email.com",
    image: "http://i1044.photobucket.com/albums/b447/janetwalker271989/lucas_zps8nk9mtzz.jpg"
  },
  {
    id: 400,
    name: "Akeeva Johnson",
    languages: "Javascript, ReactJS",
    city: "Jacksonville",
    state: "FL",
    email: "akeevava@email.com",
    image: "http://i1044.photobucket.com/albums/b447/janetwalker271989/ryanne_zpsgwxkuegz.jpg"
  }
  ];
  res.json(proTipMaster);
})

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
