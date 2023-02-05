const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Module, Statistic, Answer }) {
      this.belongsTo(Module, { foreignKey: 'moduleId' });
      this.hasMany(Statistic, { foreignKey: 'questionId' });
      this.hasMany(Answer, { foreignKey: 'questionId' });
    }
  }
  Question.init({
    moduleId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Modules',
        key: 'id',
      },
    },
    question: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
