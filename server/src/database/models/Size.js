'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    static associate(models) {
      Size.belongsToMany(models.Product, {
        through: 'ProductSize',
        foreignKey: {
          name: 'sizeId'
        }
      })
    }
  }
  Size.init({
    sizeNameAr: DataTypes.STRING,
    sizeNumberAr: DataTypes.STRING,
    cmEquiv: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Size',
  });
  return Size;
};