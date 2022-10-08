const db = require("../models");
const Air = db.airs;
const Place = db.places;
const Checklist = db.checklists;
const Op = db.Sequelize.Op;

// Create and Save a new Air
exports.create = async (req, res) => {
  // Validate request
  if (
    !req.body.brand ||
    !req.body.model ||
    !req.body.btu ||
    !req.body.fla ||
    !req.body.placeId
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Get Place Code
  const getPlaceCode = await Place.findOne({
    where: { id: req.body.placeId },
    attributes: ["code"],
  });

  // Create a Air
  const air = {
    no: "",
    brand: req.body.brand,
    model: req.body.model,
    btu: req.body.btu,
    fla: req.body.fla,
    placeId: req.body.placeId,
  };

  // Save Air in the database
  await Air.create(air)
    .then(async (data) => {
      
      await Air.update(
        { no: "A" + getPlaceCode.code + data.id },
        {
          where: {
            id: data.id,
          },
        }
      )
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Air.",
      });
    });
};

// Retrieve all Airs from the database.
exports.findAll = (req, res) => {
  Air.findAll({
    include: [
      {
        model: Place,
        as: "place",
      },
      {
        model: Checklist,
        as: "checklists",
        order: [["createdAt", "DESC"]],
        limit: 1,
      },
    ],
    order: [["id", "DESC"]],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving airs.",
      });
    });
};

// Find a single Air with an id
exports.findOne = (req, res) => {};

// Update a Air by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Air.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Air was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update air with id=${id}. Maybe Air was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Air with id=" + id,
      });
    });
};

// Delete a Air with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Air.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Air was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Air with id=${id}. Maybe Air was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Air with id=" + id,
      });
    });
};

// Delete all Air from the database.
exports.deleteAll = (req, res) => {};

// Find all published Air
exports.findAllPublished = (req, res) => {};
