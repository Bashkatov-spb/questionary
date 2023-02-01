'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Module extends Model {
    static associate({Theme,Question,Attempt}) {
this.belongsTo(Theme,{foreignKey:'themeId'})
this.hasMany(Question,{foreignKey:'moduleId'})
this.hasMany(Attempt,{foreignKey:'moduleId'})
    }
  }
  Module.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    themeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references:{
        model:'Themes',
        key:'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Module',
  });
  return Module;
};
