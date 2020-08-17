'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('categories',[
        {
          id: 1,
          name: 'Best-sellers',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'Free-to-play',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: 'Coming-soon',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: 'Early-bird',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          name: 'Featured',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 6,
          name: 'News',
          createdAt: new Date(),
          updatedAt: new Date()
        }

      ],{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories',null,{});
  }
};
