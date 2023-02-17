/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Themes', [{
      title: 'Природа',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Мебель',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Музыка',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'математика',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes');
  },
};
