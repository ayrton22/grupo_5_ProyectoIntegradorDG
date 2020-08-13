'use strict';

const dandoPlataformas=[];

for(let i = 1; i <=24 ;i++){
//let cantidadAleatoria = (Math.floor(Math.random() * 3) + 1);

  let plataform = [];
  let plataforma1 = (Math.floor(Math.random() * 3) + 1);
  
  let plataforma2 = (Math.floor(Math.random() * 3) + 1);
  while(plataforma2 == plataforma1){
    plataforma2 = (Math.floor(Math.random() * 3) + 1);
  };

  let plataforma3 = (Math.floor(Math.random() * 3) + 1);
  while(plataforma3 == plataforma1 || plataforma3 == plataforma2 ){
    plataforma3 = (Math.floor(Math.random() * 3) + 1);
  };
  plataform.push(plataforma1);
  plataform.push(plataforma2);
  plataform.push(plataforma3);

    for(let j = 0; j<= (Math.floor(Math.random() * 3)); j++){
      dandoPlataformas.push({
          id_game: i,
          id_platform: plataform[j],
          createdAt: new Date(),
          updatedAt: new Date()
      });

    }
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('games_platforms',dandoPlataformas,{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('games_platforms',null,{});
  }
};
