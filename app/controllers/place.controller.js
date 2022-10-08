const db = require("../models");
const Place = db.places;
const Op = db.Sequelize.Op;

// Create and Save a new Place
exports.create = (place) => {
  return Place.create({
    code: place.code,
    name: place.name,
  })
    .then((place) => {
      // console.log(">> Created place: " + JSON.stringify(place, null, 4));
      return place;
    })
    .catch((err) => {
      console.log(">> Error while creating place: ", err);
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Place.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving airs.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
