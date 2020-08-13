'use strict';
const fs = require('fs');
const path = require('path');

const games = [];

let products = fs.readFileSync(path.join(__dirname, '../../data/products.json'), 'utf8');
products = JSON.parse(products);

products.forEach(function(element){
  games.push({
    id : element.id,
    title: element.title,
    description: element.description,
    descriptionMedium: element.medium_description,
    descriptionBig: element.big_description,
    price: element.price,
    video: element.video,
    launch_date : new Date(),
    editor: element.editor,
    classification: element.classification,
    rating: element.rating,
    stock_user : Math.floor(Math.random() * 10),
    stock_admin: Math.floor(Math.random() * 10),
    createdAt: new Date(),
    updatedAt: new Date()
  })

});


module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('games',games,{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('games',null,{});
  }
};
