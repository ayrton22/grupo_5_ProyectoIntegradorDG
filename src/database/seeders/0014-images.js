'use strict';
const fs = require('fs');
const path = require('path');

const Cargandoimagenes = [];

let images = fs.readFileSync(path.join(__dirname, '../../data/images.json'), 'utf8');
images = JSON.parse(images);

images.forEach(function(element){
  Cargandoimagenes.push({
    id_game : element.gameId,
    location : element.ubicacion,
    img_url : "../../img/uploads/productsImage/" + element.image,
    createdAt: new Date(),
    updatedAt: new Date()
  })

});


module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('images',Cargandoimagenes,{})
   
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('images',null,{});
  }
};
