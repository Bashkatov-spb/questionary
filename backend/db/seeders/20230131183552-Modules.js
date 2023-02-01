'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Modules', [{
      title:'Деревья' ,
      themeId:1,
      createdAt: new Date(),
      updatedAt: new Date(),
   },
   {
    title:'Цветы' ,
    themeId:1,
    createdAt: new Date(),
    updatedAt: new Date(),
 },
 {
  title:'Столы' ,
  themeId:2,
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  title:'Стулья' ,
  themeId:2,
  createdAt: new Date(),
  updatedAt: new Date(),
},
  ]);
  },

  async down (queryInterface) {
  
     await queryInterface.bulkDelete('Modules');
    
  }
};
