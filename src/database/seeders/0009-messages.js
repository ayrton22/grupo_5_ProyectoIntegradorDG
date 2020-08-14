'use strict';
const faker = require('faker');

const messages = [];

for(let i = 1; i <=50; i++){
  messages.push({
      id_user: (Math.floor(Math.random() * 25) + 1),
      message: faker.lorem.words(100),
      createdAt: new Date(),
      updatedAt: new Date()
    })
}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('messages',messages,{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('messages',null,{});
  }
};
