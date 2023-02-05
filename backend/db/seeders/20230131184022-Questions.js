/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Questions', [{
      moduleId: 1,
      question: 'Какое дерево первое?',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      moduleId: 1,
      question: 'Какое дерево второе?',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      moduleId: 2,
      question: 'Что из этого цветок?',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      moduleId: 2,
      question: 'Какой цветок синего цвета?',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      moduleId: 3,
      question: 'Что есть у стола?',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      moduleId: 3,
      question: 'Стол это ?',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      moduleId: 4,
      question: 'Стул это ?',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      moduleId: 4,
      question: 'На стуле обычно делают что?',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Questions');
  },
};
