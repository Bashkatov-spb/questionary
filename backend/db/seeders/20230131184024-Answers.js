/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const answers = [
      { questionId: 1, answer: 'Четвертое', status: false }, { questionId: 1, answer: 'Второе', status: false }, { questionId: 1, answer: 'Третье', status: false }, { questionId: 1, answer: 'Первое', status: true },
      { questionId: 2, answer: 'Четвертое', status: false }, { questionId: 2, answer: 'Пятое', status: false }, { questionId: 2, answer: 'Третье', status: false }, { questionId: 2, answer: 'Второе', status: true },
      { questionId: 3, answer: 'Четвертое', status: false }, { questionId: 3, answer: 'Пятое', status: false }, { questionId: 3, answer: 'Третье', status: true }, { questionId: 3, answer: 'Второе', status: false },
      { questionId: 4, answer: 'Четвертое', status: true }, { questionId: 4, answer: 'Пятое', status: false }, { questionId: 4, answer: 'Третье', status: false }, { questionId: 4, answer: 'Второе', status: false },
      { questionId: 5, answer: 'Цветок', status: true }, { questionId: 5, answer: 'Зонт', status: false }, { questionId: 5, answer: 'Табурет', status: false }, { questionId: 5, answer: 'Бабёр', status: false },
      { questionId: 6, answer: 'Серый', status: false }, { questionId: 6, answer: 'Пурпурный', status: false }, { questionId: 6, answer: 'Белый', status: false }, { questionId: 6, answer: 'Синий', status: true },
      { questionId: 7, answer: 'Серый', status: false }, { questionId: 7, answer: 'Красный', status: true }, { questionId: 7, answer: 'Белый', status: false }, { questionId: 7, answer: 'Синий', status: false },
      { questionId: 8, answer: 'Серый', status: false }, { questionId: 8, answer: 'Пурпурный', status: false }, { questionId: 8, answer: 'Белый', status: true }, { questionId: 8, answer: 'Синий', status: false },
      { questionId: 9, answer: '63', status: true }, { questionId: 9, answer: '2', status: false }, { questionId: 9, answer: '122', status: false }, { questionId: 9, answer: '88', status: false },
      { questionId: 10, answer: 'Азовское', status: false }, { questionId: 10, answer: 'Саргассово', status: false }, { questionId: 10, answer: 'Коралловое', status: false }, { questionId: 10, answer: 'Филиппинское', status: true },
      { questionId: 11, answer: 'Азовское', status: true }, { questionId: 11, answer: 'Саргассово', status: false }, { questionId: 11, answer: 'Коралловое', status: false }, { questionId: 11, answer: 'Карибское', status: false },
      { questionId: 12, answer: 'Давай выпьем', status: false }, { questionId: 12, answer: 'Не выплюни меня', status: true }, { questionId: 12, answer: 'Оно моё', status: false }, { questionId: 12, answer: 'Не моё', status: false },
      { questionId: 13, answer: '22', status: false }, { questionId: 13, answer: '1', status: true }, { questionId: 13, answer: '8', status: false }, { questionId: 13, answer: '777', status: false },
      { questionId: 14, answer: '8', status: false }, { questionId: 14, answer: '4', status: true }, { questionId: 14, answer: '777', status: false }, { questionId: 14, answer: '5', status: false },
      { questionId: 15, answer: 'Хаски', status: false }, { questionId: 15, answer: 'Критически борзая', status: true }, { questionId: 15, answer: 'Пудель', status: false }, { questionId: 15, answer: 'Такса', status: false },
      { questionId: 16, answer: 'Домбра', status: false }, { questionId: 16, answer: 'Животные', status: true }, { questionId: 16, answer: 'Стакан', status: false }, { questionId: 16, answer: 'Торт', status: false },
      { questionId: 17, answer: 'Ножка', status: true }, { questionId: 17, answer: 'Спинка', status: false }, { questionId: 17, answer: 'Дно', status: false }, { questionId: 17, answer: 'Лампочка', status: false },
      { questionId: 18, answer: 'Борщь', status: false }, { questionId: 18, answer: 'Стена', status: false }, { questionId: 18, answer: 'Гриб', status: false }, { questionId: 18, answer: 'Стол', status: true },
      { questionId: 19, answer: 'Борщь', status: false }, { questionId: 19, answer: 'Бисер', status: false }, { questionId: 19, answer: 'Китов', status: false }, { questionId: 19, answer: 'Стаканы', status: true },
      { questionId: 20, answer: 'Круглого', status: false }, { questionId: 20, answer: 'Квадратного', status: false }, { questionId: 20, answer: 'Деревянного', status: false }, { questionId: 20, answer: 'Жидкого', status: true },
      { questionId: 21, answer: 'Стул', status: true }, { questionId: 21, answer: 'Колбаса', status: false }, { questionId: 21, answer: 'Гриб', status: false }, { questionId: 21, answer: 'Птица', status: false },
      { questionId: 22, answer: 'Моются', status: false }, { questionId: 22, answer: 'Танцуют', status: false }, { questionId: 22, answer: 'Режут', status: false }, { questionId: 22, answer: 'Сидят', status: true },
      { questionId: 23, answer: 'На стене', status: false }, { questionId: 23, answer: 'На потолке', status: false }, { questionId: 23, answer: 'На санках', status: false }, { questionId: 23, answer: 'На табурете', status: true },
      { questionId: 24, answer: 'Нет', status: false }, { questionId: 24, answer: 'Возможно', status: false }, { questionId: 24, answer: '???', status: false }, { questionId: 22, answer: 'Стул', status: true },
      { questionId: 25, answer: 'Мягкой', status: false }, { questionId: 25, answer: 'Круглой', status: false }, { questionId: 25, answer: 'Заправленной', status: false }, { questionId: 25, answer: 'Полуспальной', status: true },
      { questionId: 26, answer: 'Мягкого', status: false }, { questionId: 26, answer: 'Старого', status: false }, { questionId: 26, answer: 'Белого', status: false }, { questionId: 26, answer: 'Острого', status: true },
      { questionId: 27, answer: 'Тумба', status: false }, { questionId: 27, answer: 'Кошка', status: false }, { questionId: 27, answer: 'Шишка', status: false }, { questionId: 27, answer: 'Кровать', status: true },
      { questionId: 28, answer: 'Болт', status: false }, { questionId: 28, answer: 'Бангладеш', status: false }, { questionId: 28, answer: 'Бордюр', status: false }, { questionId: 28, answer: 'Балдахин', status: true },
      { questionId: 29, answer: 'Улитка', status: false }, { questionId: 29, answer: '29', status: false }, { questionId: 29, answer: 'Холст', status: false }, { questionId: 29, answer: 'Шкаф', status: true },
      { questionId: 30, answer: 'Деревянного', status: false }, { questionId: 30, answer: 'Пустого', status: false }, { questionId: 30, answer: 'Белого', status: false }, { questionId: 30, answer: 'Желейного', status: true },
      { questionId: 31, answer: 'Параход', status: false }, { questionId: 31, answer: 'Дом', status: false }, { questionId: 31, answer: 'Тюленя', status: false }, { questionId: 31, answer: 'Вещи', status: true },
      { questionId: 32, answer: 'Ворона', status: false }, { questionId: 32, answer: 'Танцор', status: false }, { questionId: 32, answer: 'Хлебушек', status: false }, { questionId: 32, answer: 'Шкаф', status: true },
      { questionId: 33, answer: 'Лежишь на диване', status: false }, { questionId: 33, answer: 'Готовишь борщ', status: false }, { questionId: 33, answer: 'Клеишь марки', status: false }, { questionId: 33, answer: 'Вошла в мою грешную жизнь', status: true },
      { questionId: 34, answer: 'На день города', status: false }, { questionId: 34, answer: 'На телефоне', status: false }, { questionId: 34, answer: 'Тортик', status: false }, { questionId: 34, answer: 'Вера', status: true },
      { questionId: 35, answer: 'Халата', status: false }, { questionId: 35, answer: 'Песца', status: false }, { questionId: 35, answer: 'Риса', status: false }, { questionId: 35, answer: 'Мотылька', status: true },
      { questionId: 36, answer: 'Носок', status: false }, { questionId: 36, answer: 'Пивка', status: false }, { questionId: 36, answer: 'Моржа', status: false }, { questionId: 36, answer: 'Тебя', status: true },
      { questionId: 37, answer: 'Мороженку', status: false }, { questionId: 37, answer: 'Доску', status: false }, { questionId: 37, answer: 'Колобка', status: false }, { questionId: 37, answer: 'Тебя', status: true },
      { questionId: 38, answer: 'Скороговорок', status: false }, { questionId: 38, answer: 'Медоедов', status: false }, { questionId: 38, answer: 'Старых кедов', status: false }, { questionId: 38, answer: 'Апельсинов', status: true },
      { questionId: 39, answer: 'Анатолий', status: false }, { questionId: 39, answer: 'Тортик', status: false }, { questionId: 39, answer: 'Река', status: false }, { questionId: 39, answer: 'Ромашки', status: true },
      { questionId: 40, answer: 'Мозг', status: false }, { questionId: 40, answer: 'Проклятый старый дом', status: false }, { questionId: 40, answer: 'Краб', status: false }, { questionId: 40, answer: 'Любимый город', status: true },
      { questionId: 41, answer: '5', status: false }, { questionId: 41, answer: '40', status: false }, { questionId: 41, answer: '6', status: false }, { questionId: 41, answer: '7', status: true },
      { questionId: 42, answer: 'До', status: false }, { questionId: 42, answer: 'Фа', status: false }, { questionId: 42, answer: 'Си', status: false }, { questionId: 42, answer: 'Пи', status: true },
      { questionId: 43, answer: 'Шторм', status: false }, { questionId: 43, answer: 'Горох', status: false }, { questionId: 43, answer: 'Тополь', status: false }, { questionId: 43, answer: 'Нота', status: true },
      { questionId: 44, answer: 'Кофта', status: false }, { questionId: 44, answer: 'Дуга', status: false }, { questionId: 44, answer: 'Мука', status: false }, { questionId: 44, answer: 'Тетрадь', status: true },
      { questionId: 45, answer: 'Иоганн', status: false }, { questionId: 45, answer: 'Михаил', status: false }, { questionId: 45, answer: 'Людвиг', status: false }, { questionId: 45, answer: 'Вольфганг', status: true },
      { questionId: 46, answer: 'Иоганн', status: false }, { questionId: 46, answer: 'Михаил', status: false }, { questionId: 46, answer: 'Людвиг', status: true }, { questionId: 46, answer: 'Вольфганг', status: false },
      { questionId: 47, answer: 'Иоганн', status: true }, { questionId: 47, answer: 'Михаил', status: false }, { questionId: 47, answer: 'Людвиг', status: false }, { questionId: 47, answer: 'Вольфганг', status: false },
      { questionId: 48, answer: 'Иоганн', status: false }, { questionId: 48, answer: 'Михаил', status: true }, { questionId: 48, answer: 'Людвиг', status: false }, { questionId: 48, answer: 'Вольфганг', status: false },
      { questionId: 49, answer: '8', status: false }, { questionId: 49, answer: '10', status: false }, { questionId: 49, answer: '15', status: false }, { questionId: 49, answer: '4', status: true },
      { questionId: 50, answer: '10', status: false }, { questionId: 50, answer: '47', status: false }, { questionId: 50, answer: '4', status: false }, { questionId: 50, answer: '6', status: true },
      { questionId: 51, answer: '5', status: false }, { questionId: 51, answer: '10', status: false }, { questionId: 51, answer: '1', status: false }, { questionId: 51, answer: '8', status: true },
      { questionId: 52, answer: '100', status: false }, { questionId: 52, answer: '4', status: false }, { questionId: 52, answer: '11', status: false }, { questionId: 52, answer: '10', status: true },
      { questionId: 53, answer: '1', status: false }, { questionId: 53, answer: '5', status: false }, { questionId: 53, answer: '7', status: false }, { questionId: 53, answer: '2', status: true },
      { questionId: 54, answer: '4', status: false }, { questionId: 54, answer: '8', status: false }, { questionId: 54, answer: '16', status: false }, { questionId: 54, answer: '3', status: true },
      { questionId: 55, answer: '16', status: false }, { questionId: 55, answer: '14', status: false }, { questionId: 55, answer: '2', status: false }, { questionId: 55, answer: '4', status: true },
      { questionId: 56, answer: '10', status: false }, { questionId: 56, answer: '2', status: false }, { questionId: 56, answer: '100', status: false }, { questionId: 56, answer: '5', status: true },
      { questionId: 57, answer: '2', status: false }, { questionId: 57, answer: '16', status: false }, { questionId: 57, answer: '1', status: false }, { questionId: 57, answer: '0', status: true },
      { questionId: 58, answer: '12', status: false }, { questionId: 58, answer: '0', status: false }, { questionId: 58, answer: '3', status: false }, { questionId: 58, answer: '1', status: true },
      { questionId: 59, answer: '1', status: false }, { questionId: 59, answer: '4', status: false }, { questionId: 59, answer: '8', status: false }, { questionId: 59, answer: '2', status: true },
      { questionId: 60, answer: '5', status: false }, { questionId: 60, answer: '57', status: false }, { questionId: 60, answer: '0', status: false }, { questionId: 60, answer: '3', status: true },
      { questionId: 61, answer: '8', status: false }, { questionId: 61, answer: '10', status: false }, { questionId: 61, answer: '22', status: false }, { questionId: 61, answer: '4', status: true },
      { questionId: 62, answer: '9', status: false }, { questionId: 62, answer: '23', status: false }, { questionId: 62, answer: '147', status: false }, { questionId: 62, answer: '5', status: true },
      { questionId: 63, answer: '5', status: false }, { questionId: 63, answer: '88', status: false }, { questionId: 63, answer: '24', status: false }, { questionId: 63, answer: '6', status: true },
      { questionId: 64, answer: '100', status: false }, { questionId: 64, answer: '25', status: false }, { questionId: 64, answer: '17', status: false }, { questionId: 64, answer: '7', status: true },
    ];

    const arrAnswers = answers.map((answer) => (
      {
        ...answer,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));

    await queryInterface.bulkInsert('Answers', arrAnswers);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Answers');
  },
};
