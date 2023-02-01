'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Questions', [{
      moduleId:1,
      qustion:"Какое дерево первое?",
      falseAnswer1:'Четвертое',
      falseAnswer2:'Второе',
      falseAnswer3:'Третье',
      trueAnswer:'Первое',
      createdAt: new Date(),
      updatedAt: new Date(),
   },
   {
    moduleId:1,
    qustion:"Какое дерево второе?",
    falseAnswer1:'Четвертое',
    falseAnswer2:'Пятое',
    falseAnswer3:'Третье',
    trueAnswer:'Второе',
    createdAt: new Date(),
    updatedAt: new Date(),
 },
 {
  moduleId:2,
  qustion:"Что из этого цветок?",
  falseAnswer1:'Зонт',
  falseAnswer2:'Табурет',
  falseAnswer3:'Бабёр',
  trueAnswer:'Цветок',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  moduleId:2,
  qustion:"Какой цветок синего цвета?",
  falseAnswer1:'Белый',
  falseAnswer2:'Серый',
  falseAnswer3:'Пурпурный',
  trueAnswer:'Синий',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  moduleId:3,
  qustion:"Что есть у стола?",
  falseAnswer1:'Спинка',
  falseAnswer2:'Дно',
  falseAnswer3:'Лампочка',
  trueAnswer:'Ножка',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  moduleId:3,
  qustion:"Стол это ?",
  falseAnswer1:'Борщь',
  falseAnswer2:'Стена',
  falseAnswer3:'Гриб',
  trueAnswer:'Стол',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  moduleId:4,
  qustion:"Стул это ?",
  falseAnswer1:'Пень',
  falseAnswer2:'Крыса',
  falseAnswer3:'Молот Тора',
  trueAnswer:'Стул',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  moduleId:4,
  qustion:"На стуле обычно делают что?",
  falseAnswer1:'Моются',
  falseAnswer2:'Танцуют',
  falseAnswer3:'Режут бутики',
  trueAnswer:'Сидят',
  createdAt: new Date(),
  updatedAt: new Date(),
},
  ]);
  },

  async down (queryInterface) {
  
     await queryInterface.bulkDelete('Questions');
    
  }
};
