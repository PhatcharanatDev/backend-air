module.exports = (sequelize, Sequelize) => {
  const Checklist = sequelize.define("checklists", {
    no: {
      type: Sequelize.STRING(255),
      unique: true,
    },
    fan_coil_filter: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    air_machine: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    cooling_coil: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    refrigerant_pressure_hside: {
      type: Sequelize.FLOAT,
      defaultValue: 0,
    },
    refrigerant_pressure_lside: {
      type: Sequelize.FLOAT,
      defaultValue: 0,
    },
    belt_cooling: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    cold_air_nozzle: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    return_air_duct: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    reagent_pipe_system: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    insulation_air_duct: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    electrical_wire: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    electrical_wire_clamp: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    electrical_connector: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    voltage: {
      type: Sequelize.FLOAT,
      defaultValue: 0,
    },
    ampere: {
      type: Sequelize.FLOAT,
      defaultValue: 0,
    },
    oil_pressure: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    air_body: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    drip_tray: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    sewer: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    condersing_coil: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    mounting_bracket: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    hl_pressure_switch: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    magnetic_coil_contactor: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    overload_protection: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    times_delay_relay: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    control_tranformer: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    thermostat: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    remark: {
      type: Sequelize.STRING(255),
    },
    status: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
    prices: {
      type: Sequelize.DECIMAL(12, 2),
    },
  });

  return Checklist;
};
