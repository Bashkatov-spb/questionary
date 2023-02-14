/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const questions = [
      { moduleId: 1, question: 'Какое дерево первое?' }, { moduleId: 1, question: 'Какое дерево второе?' },
      { moduleId: 1, question: 'Какое дерево третье?' }, { moduleId: 1, question: 'Какое дерево четвёртое?' },
      { moduleId: 2, question: 'Что из этого цветок?' }, { moduleId: 2, question: 'Какой цветок синего цвета?' },
      { moduleId: 2, question: 'Какой цветок красного цвета?' }, { moduleId: 2, question: 'Какой цветок белого цвета?' },
      { moduleId: 3, question: 'Сколько морей на земле' }, { moduleId: 3, question: 'Какое самое глубокое море?' },
      { moduleId: 3, question: 'Какое море самое мелкое?' }, { moduleId: 3, question: 'Моё море ,прошу тебя ...' },
      { moduleId: 4, question: 'Сколько рогов у единорога?' }, { moduleId: 4, question: 'Сколько копыт у коровы?' },
      { moduleId: 4, question: 'какой породы собак не существует?' }, { moduleId: 4, question: 'Животные это?' },
      { moduleId: 5, question: 'Что есть у стола?' }, { moduleId: 5, question: 'Стол это ?' },
      { moduleId: 5, question: ' Ну-ка мечи ... на стол' }, { moduleId: 5, question: 'Какого стола не существует?' },
      { moduleId: 6, question: 'Стул это ?' }, { moduleId: 6, question: 'На стуле обычно делают что?' },
      { moduleId: 6, question: 'На чём в детстве мы рассказывали стихи?' }, { moduleId: 6, question: 'Стул?' },
      { moduleId: 7, question: 'Какой кровати не существует ?' }, { moduleId: 7, question: 'Какого матраса не существует ?' },
      { moduleId: 7, question: 'Кровать это ?' }, { moduleId: 7, question: 'Что весит над кроватью?' },
      { moduleId: 9, question: 'Шкаф это ?' }, { moduleId: 9, question: 'Какого шкафа не существует?' },
      { moduleId: 9, question: 'Что хранят в шкафу ?' }, { moduleId: 9, question: 'Как называют накаченного человека?' },
      { moduleId: 9, question: 'Красиво ты ...' }, { moduleId: 9, question: 'Салют ...' },
      { moduleId: 9, question: 'Самбо белого ...' }, { moduleId: 9, question: 'Я не могу без ...' },
      { moduleId: 10, question: 'Я искала ...' }, { moduleId: 10, question: 'Хочешь сладких ...' },
      { moduleId: 10, question: 'Привет ...' }, { moduleId: 10, question: 'До свидания мой ...' },
      { moduleId: 11, question: 'Сколько всего нот?' }, { moduleId: 11, question: 'Какой ноты нет ?' },
      { moduleId: 11, question: 'Нота это ?' }, { moduleId: 11, question: 'Нотная ...' },
      { moduleId: 12, question: 'Как звали Моцарта ?' }, { moduleId: 12, question: 'Как звали Бетховена ?' },
      { moduleId: 12, question: 'Как звали Баха ?' }, { moduleId: 12, question: 'Как звали Глинку ?' },
      { moduleId: 13, question: '2 * 2 =' }, { moduleId: 13, question: '2 * 3 =' },
      { moduleId: 13, question: '2 * 4 =' }, { moduleId: 13, question: '2 * 5 =' },
      { moduleId: 14, question: '4 : 2 =' }, { moduleId: 14, question: '6 : 2 =' },
      { moduleId: 14, question: '8 : 2 =' }, { moduleId: 14, question: '10 : 2 =' },
      { moduleId: 15, question: '2 - 2 =' }, { moduleId: 15, question: '3 - 2 =' },
      { moduleId: 15, question: '4 - 2 =' }, { moduleId: 15, question: '5 - 2 =' },
      { moduleId: 16, question: '2 + 2 =' }, { moduleId: 16, question: '2 + 3 =' },
      { moduleId: 16, question: '2 + 4 =' }, { moduleId: 16, question: '2 + 5 =' },
    ];

    const arrQuestions = questions.map((question) => (
      {
        ...question,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
    await queryInterface.bulkInsert('Questions', arrQuestions);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Questions');
  },
};
