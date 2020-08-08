'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('games', [
      {
        title: faker.name.title(),
        description: faker.lorem.sentence(),
        descriptionMedium: faker.lorem.sentences(),
        descriptionBig: faker.lorem.paragraph(),
        price: faker.commerce.price(),
        created_at: new Date(),
        updated_at: new Date(),
        video: faker.internet.url(),
        launch_date: faker.date.between('1900-01-01, 2020-01-01'),
        editor: faker.lorem.word(),
        clasification: faker.lorem.word(),
        rating: faker.random.number(),
        stock: faker.random.number()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('games', null, {})
  }
};
