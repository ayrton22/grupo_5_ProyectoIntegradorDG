'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('platforms',[
      {
        id: 1,
        name: 'PlayStation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Xbox',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Pc',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('platforms',null,{});
  }
};
