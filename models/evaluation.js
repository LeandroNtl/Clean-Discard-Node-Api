'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evaluation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      Evaluation.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
      Evaluation.belongsTo(models.DiscardPoint, {
        foreignKey: 'discard_point_id'
      });
      
    }
  }
  Evaluation.init({
    user_id: DataTypes.INTEGER,
    discard_point_id: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Evaluation',
  });
  return Evaluation;
};