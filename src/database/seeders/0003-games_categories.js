'use strict';
const dandoCategorias=[];
for(let i = 1; i <=24 ;i++){
  //let cantidadAleatoria = (Math.floor(Math.random() * 3) + 1);
  
    let categories = [];
    let category1 = (Math.floor(Math.random() * 6) + 1);
    
    let category2 = (Math.floor(Math.random() * 6) + 1);
    while(category2 == category1){
      category2 = (Math.floor(Math.random() * 6) + 1);
    };
  
    let category3 = (Math.floor(Math.random(  ) * 6) + 1);
    while(category3 == category2 || category3 == category1 ){
      category3 = (Math.floor(Math.random() * 6) + 1);
    };
    categories.push(category1);
    categories.push(category2);
    categories.push(category3);
  
      for(let j = 0; j <categories.length; j++){
        dandoCategorias.push({
            id_game: i,
            id_category: categories[j],
            createdAt: new Date(),
            updatedAt: new Date()
        });
  
      }
  };

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('games_categories',dandoCategorias,{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('games_categories',null,{});
  }
};
