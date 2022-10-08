module.exports = app => {
    const checklists = require("../controllers/checklist.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", checklists.create);
  
    // Retrieve all checklists
    router.get("/", checklists.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", checklists.findOne);

    // Retrieve a single Checklist with id
    router.get("/air/:id", checklists.findAllByAirId);
  
    // Update a Tutorial with id
    router.put("/:id", checklists.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", checklists.delete);
  
    // Delete all checklists
    router.delete("/", checklists.deleteAll);
  
    app.use('/api/checklists', router);
  };