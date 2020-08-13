'use strict';
const dandoCategorias=[];
for(let i = 1; i <=20 ;i++){
  dandoCategorias.push({
    id_game: i,
    id_categorie: (Math.floor(Math.random() * 6) + 1)
  })

}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('games_categories',dandoCategorias,{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('games_categories',null,{});
  }
};
