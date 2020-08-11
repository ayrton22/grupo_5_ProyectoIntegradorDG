'use strict';

const bcrypt = require('bcrypt');
const faker = require('faker');

const users = [...Array(10)].map((users, i) => (
    {
      id: i,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      username: faker.lorem.word(),
      email: faker.internet.email(),
      password: bcrypt.hashSync(faker.internet.password(16), 10),
      gender: Math.round(Math.random()) == 1 ? 'H' : 'M',
      birth_date: new Date(),//faker.date.between('1900-01-01', '2015-01-01'),
      age: 27, // today.Date() - this.birth_date.substring(0,4) ,
      address: String(faker.address.country() + ', ' + faker.address.state() + ', ' + faker.address.city() + ', ' + faker.address.streetAddress()), 
      avatar: faker.image.avatar(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
  )
);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
