'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      moduleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'Modules',
          key:'id'
        }
      },
      qustion: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      falseAnswer1: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      falseAnswer2: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      falseAnswer3: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      trueAnswer: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Questions');
  }
};
