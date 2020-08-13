'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('categories',[
        {
          id: 1,
          name: 'best-sellers',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'free-to-play',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: 'coming-soon',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: 'on-sale',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          name: 'early-bird',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 6,
          name: 'outstanding',
          createdAt: new Date(),
          updatedAt: new Date()
        },

      ],{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories',null,{});
  }
};
