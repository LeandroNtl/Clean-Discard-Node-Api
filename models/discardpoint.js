'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DiscardPoint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      DiscardPoint.hasMany(models.DiscardPointWaste, {
        foreignKey: 'discard_point_id'
      });
      DiscardPoint.hasMany(models.Evaluation, {
        foreignKey: 'discard_point_id'
      });
      
    }
  }
  DiscardPoint.init({
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    description: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    evaluation: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'DiscardPoint',
  });
  return DiscardPoint;
};