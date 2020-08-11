'use strict';
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('shopping_carts', [
      {
        total_cost: faker.commerce.price(10),
        quantity: faker.random.number(1),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('shopping_carts', null, {})
  }
};
