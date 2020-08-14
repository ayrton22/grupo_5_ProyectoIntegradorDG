'use strict';
const faker = require('faker');

const creandotransactions=[];

for(let i = 1; i <=25; i++){
  creandotransactions.push({
    id: i,
    id_user: Math.floor(Math.random() * 25) + 1,
    total_cost: faker.commerce.price(1000,50000),
    status: "Finished",
    payment: faker.lorem.word(),
    createdAt: new Date(),
    updatedAt: new Date()
    })
}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('transactions', creandotransactions, {})},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('transactions',null,{});
  }
};
