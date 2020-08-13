'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('genres',[
      {
        id: 1,
        name: 'First-Person',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'MMO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Action',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Adventure',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'Roleplay',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: 'Shooter',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        id: 7,
        name: 'Survival',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: 'Horror',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: 'Sports',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        name: 'Racing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        name: 'Third person',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        name: 'Indie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        name: 'MOBA',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ],{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('genres',null,{});
  }
};
