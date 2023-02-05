const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate({ Question }) {
      this.belongsTo(Question, { foreignKey: 'questionId' });
    }
  }
  Answer.init({
    answer: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    status: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    questionId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Questions',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};
