'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({Module,Statistic}) {
      this.belongsTo(Module,{foreignKey:'moduleId'})
      this.hasMany(Statistic,{foreignKey:'questionId'})
    }
  }
  Question.init({
    moduleId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references:{
        model:'Modules',
        key:'id'
      }
    },
    qustion: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    falseAnswer1: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    falseAnswer2: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    falseAnswer3: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    trueAnswer: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
