module.exports = app => {
    const airs = require("../controllers/air.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", airs.create);
  
    // Retrieve all airs
    router.get("/", airs.findAll);
  
    // Retrieve all published airs
    router.get("/published", airs.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", airs.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", airs.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", airs.delete);
  
    // Delete all airs
    router.delete("/", airs.deleteAll);
  
    app.use('/api/airs', router);
  };