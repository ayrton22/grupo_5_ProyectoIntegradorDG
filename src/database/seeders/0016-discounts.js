'use strict';
const dandoDescuentos=[];
let arraynumrandom = [];
			let verificador = 0;
			while(arraynumrandom.length < 10)
			{
        let random = Math.floor(Math.random() * 24) + 1;
        let percentage = (Math.floor(Math.random() * 20) + 1) *5;
				if (arraynumrandom.length == 0){
          arraynumrandom.push(random);
          dandoDescuentos.push({
            id_game: random,
            percentage_discount : percentage,
            createdAt: new Date(),
            updatedAt: new Date()
          });
          
        }else{
					for(let j = 0; j < arraynumrandom.length; j++){
						if(random != arraynumrandom[j]){
							verificador++;
					}
					if(verificador == arraynumrandom.length){ 
            arraynumrandom.push(random);
            dandoDescuentos.push({
              id_game: random,
              percentage_discount : percentage,
              createdAt: new Date(),
              updatedAt: new Date()
            });
				}
				
				}
				verificador = 0;
      }
  };

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('discounts',dandoDescuentos,{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('discounts',null,{});
  }
};
