'use strict';

const agregandoJuegosaCompras = [];

for(let i = 1; i <=50; i++){
  agregandoJuegosaCompras.push({
      id_game: Math.floor(Math.random() * 24) + 1,
      id_transaction: i<25 ? i : (Math.floor(Math.random() * 25) + 1),
      createdAt: new Date(),
      updatedAt: new Date()
    })
}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('games_transactions',agregandoJuegosaCompras,{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('games_transactions',null,{});
  }
};

