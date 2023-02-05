const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Statistic extends Model {
    static associate({ Attempt, Question }) {
      this.belongsTo(Attempt, { foreignKey: 'attemptId' });
      this.belongsTo(Question, { foreignKey: 'questionId' });
    }
  }
  Statistic.init({
    attemptId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Attempts',
        key: 'id',
      },
    },
    questionId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Questions',
        key: 'id',
      },
    },
    rights: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
  }, {
    sequelize,
    modelName: 'Statistic',
  });
  return Statistic;
};
