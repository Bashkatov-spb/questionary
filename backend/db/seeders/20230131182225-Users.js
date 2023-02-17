const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'ninja',
        email: 'ninja@gmail.com',
        password: await bcrypt.hash('ninja', 10),
        avatar: '/images/avatars/avatar.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'anya',
        email: 'anya@gmail.com',
        password: await bcrypt.hash('anya', 10),
        avatar: '/images/avatars/avatar.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
