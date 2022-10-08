module.exports = app => {
    const places = require("../controllers/place.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", places.create);
  
    // Retrieve all places
    router.get("/", places.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", places.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", places.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", places.delete);
  
    // Delete all places
    router.delete("/", places.deleteAll);
  
    app.use('/api/places', router);
  };