const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.places = require("./place.model.js")(sequelize, Sequelize);
db.airs = require("./air.model.js")(sequelize, Sequelize);
db.checklists = require("./checklist.model.js")(sequelize, Sequelize);

db.airs.hasMany(db.checklists, { as: "checklists" , onDelete: 'CASCADE ', }); 
db.checklists.belongsTo(db.airs, {
  foreignKey: "airId",
  as: "air",
});

db.places.hasMany(db.airs, { as: "airs" });
db.airs.belongsTo(db.places, {
  foreignKey: "placeId",
  as: "place",
});

module.exports = db;     