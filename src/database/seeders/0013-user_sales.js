'use strict';
const faker = require('faker');

const creandoVentasUsuarios=[];

for(let i = 1; i <=50; i++){
  let usuario1 =  Math.floor(Math.random() * 25) + 1;
  let usuario2 = Math.floor(Math.random() * 25) + 1;
  creandoVentasUsuarios.push({
    id: i,
    id_game: Math.floor(Math.random() * 24) + 1,
    id_seller_user: usuario1,
    id_buyer_user: usuario2 == usuario1 ? null: usuario2,
    game_status: faker.lorem.word(),
    payment: faker.lorem.word(),
    price: faker.commerce.price(1000,50000),
    status_transaction: usuario2 == usuario1 ? "Selling": "Sold",
    delivery_type: faker.lorem.word(),
    createdAt: new Date(),
    updatedAt: new Date()
    })
}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_sales', creandoVentasUsuarios, {})},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_sales',null,{});
  }
};
