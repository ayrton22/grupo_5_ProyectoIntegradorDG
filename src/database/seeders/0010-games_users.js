'use strict';
const faker = require('faker');

const creandoCarritos = [];

for(let i = 0; i <50; i++){
  creandoCarritos.push({
      id_game: Math.floor(Math.random() * 24) + 1,
      id_user: Math.floor(Math.random() * 25) + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    })
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('games_users',creandoCarritos,{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('games_users',null,{});
  }
};

