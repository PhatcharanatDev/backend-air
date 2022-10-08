module.exports = (sequelize, Sequelize) => {
  const Air = sequelize.define("airs", {
    no: {
      type: Sequelize.STRING(255),
      unique: true
    },
    brand: {
      type: Sequelize.STRING(255),
    },
    model: {
      type: Sequelize.STRING(255),
    },
    btu: {
      type: Sequelize.FLOAT,
    },
    fla: {
      type: Sequelize.FLOAT,
    },
    next_check: {
      type: Sequelize.DATE,
    },
  });

  return Air;
};
