'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DiscardPointWaste extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        
        DiscardPointWaste.belongsTo(models.DiscardPoint, {
          foreignKey: 'discard_point_id'
        });
        DiscardPointWaste.belongsTo(models.Waste, {
          foreignKey: 'waste_id'
        });
    }
  }
  DiscardPointWaste.init({
    discard_point_id: DataTypes.INTEGER,
    waste_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DiscardPointWaste',
  });
  return DiscardPointWaste;
};