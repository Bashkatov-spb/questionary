/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const modules = [{ title: 'Деревья', themeId: 1 }, { title: 'Цветы', themeId: 1 },
      { title: 'Море', themeId: 1 }, { title: 'Животные', themeId: 1 },
      { title: 'Столы', themeId: 2 }, { title: 'Стулья', themeId: 2 },
      { title: 'Кровати', themeId: 2 }, { title: 'Шкафы', themeId: 2 },
      { title: 'Меладзе', themeId: 3 }, { title: 'Земфира', themeId: 3 },
      { title: 'Ноты', themeId: 3 }, { title: 'Классическая музыка', themeId: 3 },
      { title: 'Задачи на умножение', themeId: 4 }, { title: 'Задачи на деление', themeId: 4 },
      { title: 'Задачи на вычитание', themeId: 4 }, { title: 'Задачи на сложение', themeId: 4 }];

    const arrModules = modules.map((module) => (
      {
        ...module,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
    await queryInterface.bulkInsert('Modules', arrModules);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Modules');
  },
};
