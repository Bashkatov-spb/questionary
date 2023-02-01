'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({Module}) {
this.hasMany(Module,{foreignKey:'themeId'})
    }
  }
  Theme.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};
