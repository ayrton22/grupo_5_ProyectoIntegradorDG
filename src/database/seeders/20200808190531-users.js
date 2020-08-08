'use strict';

const bcrypt = require('bcrypt');
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        username: faker.lorem.word(),
        email: faker.internet.email(),
        password: bcrypt.hashSync(faker.internet.password(16), 10),
        gender: 'H',
        birth_date: faker.date.between('1900-01-01', '2015-01-01'),
        age: String(Date.now() - this.birth_date),
        address: /*String(faker.address.streetAddress()),*/ String(faker.address.country() + ', ' + faker.address.state() + ', ' + faker.address.city() + ', ' + faker.address.streetAddress()), 
        avatar: faker.image.imageURL,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {}) 
  }
};
