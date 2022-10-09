const db = require("../models");
const Checklist = db.checklists;
const Air = db.airs;
const Op = db.Sequelize.Op;

// Create and Save a new Checklist
exports.create = async (req, res) => {
  const getLastCheck = await Checklist.findOne({
    where: { airId: req.body.airId },
    order: [["createdAt", "DESC"]],
  });

  const currentDate = new Date();
  const lastChecked = getLastCheck == null ? getLastCheck : getLastCheck.createdAt.toLocaleDateString();
  

  if (lastChecked === currentDate.toLocaleDateString()) {
    res.send({
      message: `Today's checklist has been created.`,
      createStatus : 0
    });
    return;
  }

  // Create a Checklist
  const checklist = {
    no: "",
    fan_coil_filter: req.body.fan_coil_filter || 0,
    air_machine: req.body.air_machine || 0,
    cooling_coil: req.body.cooling_coil || 0,
    refrigerant_pressure_hside: req.body.refrigerant_pressure_hside,
    refrigerant_pressure_lside: req.body.refrigerant_pressure_lside,
    belt_cooling: req.body.belt_cooling || 0,
    cold_air_nozzle: req.body.cold_air_nozzle || 0,
    return_air_duct: req.body.return_air_duct || 0,
    reagent_pipe_system: req.body.reagent_pipe_system || 0,
    insulation_air_duct: req.body.insulation_air_duct || 0,
    electrical_wire: req.body.electrical_wire || 0,
    electrical_wire_clamp: req.body.electrical_wire_clamp || 0,
    electrical_connector: req.body.electrical_connector || 0,
    voltage: req.body.voltage,
    ampere: req.body.ampere,
    oil_pressure: req.body.oil_pressure || 0,
    air_body: req.body.air_body || 0,
    drip_tray: req.body.drip_tray || 0,
    sewer: req.body.sewer || 0,
    condersing_coil: req.body.condersing_coil || 0,
    mounting_bracket: req.body.mounting_bracket || 0,
    hl_pressure_switch: req.body.hl_pressure_switch || 0,
    magnetic_coil_contactor: req.body.magnetic_coil_contactor || 0,
    overload_protection: req.body.overload_protection || 0,
    times_delay_relay: req.body.times_delay_relay || 0,
    control_tranformer: req.body.control_tranformer || 0,
    thermostat: req.body.thermostat || 0,
    remark: req.body.remark,
    status: req.body.status || 0,
    prices: req.body.prices,
    airId: req.body.airId,
  };

  // Save Air in the database
  await Checklist.create(checklist)
    .then(async (data) => {
      // + 6 Month
      const nextCheck = data.createdAt.setMonth(data.createdAt.getMonth() + 6);

      await Checklist.update(
        { no: "CL" + ("00000" + data.id).slice(-5) },
        {
          where: {
            id: data.id,
          },
        }
      );

      await Air.update(
        { next_check: nextCheck },
        {
          where: {
            id: data.airId,
          },
        }
      );
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Checklist.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Checklist.findAll({ order: [["id", "DESC"]] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving airs.",
      });
    });
};

// Find a single Checklist with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Checklist.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Checklist with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Checklist with id=" + id,
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Checklist.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Checklist was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Checklist with id=${id}. Maybe Checklist was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Air with id=" + id,
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};

// Find all By AirId
exports.findAllByAirId = (req, res) => {
  const id = req.params.id;

  Checklist.findAll({ where: { airId: id }, order: [["id", "DESC"]] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
