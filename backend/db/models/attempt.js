const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Attempt extends Model {
    static associate({ User, Module, Statistic }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Module, { foreignKey: 'moduleId' });
      this.hasMany(Statistic, { foreignKey: 'attemptId' });
    }
  }
  Attempt.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    moduleId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Modules',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Attempt',
  });
  return Attempt;
};
