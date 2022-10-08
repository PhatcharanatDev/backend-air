module.exports = (sequelize, Sequelize) => {
    const Place = sequelize.define("places", {
      code: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
        
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },
    });
  
    return Place;
  };
  