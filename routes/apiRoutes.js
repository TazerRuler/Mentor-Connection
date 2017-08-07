var express = require("express");

var mentorController = require("../controllers/mentorController");
var menteeController = require("../controllers/menteeController");

var router = new express.Router();

// Get all quotes (or optionally a specific mentor with an id)
router.get("/mentor/:id?", mentorController.index);
// Create a new mentor using data passed in req.body
router.post("/mentor", mentorController.create);
// Update an existing mentor with a speicified id param, using data in req.body
router.patch("/mentor/:id", mentorController.update);
// Delete a specific mentor using the id in req.params.id
router.delete("/mentor/:id", mentorController.destroy);

// Get all mentee (or optionally a specific mentor with an id)
router.get("/mentee/:id?", menteeController.index);
// Create a new mentor using data passed in req.body
router.post("/mentee", menteeController.create);
// Update an existing mentor with a speicified id param, using data in req.body
router.patch("/mentee/:id", menteeController.update);
// Delete a specific mentor using the id in req.params.id
router.delete("/mentee/:id", menteeController.destroy);

module.exports = router;
