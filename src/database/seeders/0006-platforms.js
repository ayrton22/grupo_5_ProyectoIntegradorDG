'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('platforms',[
      {
        id: 1,
        name: 'PlayStation',
        icono: "fab fa-playstation icono-playstation",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Xbox',
        icono: "fab fa-xbox icono-xbox",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Pc',
        icono: "fas fa-desktop icono-desktop",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('platforms',null,{});
  }
};
