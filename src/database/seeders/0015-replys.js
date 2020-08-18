'use strict';
const faker = require('faker');

const respondiendoPreguntas = [];

for(let i = 1; i <=30; i++){
  respondiendoPreguntas.push({
      id_question: (Math.floor(Math.random() * 25) + 1),
      id_user: (Math.floor(Math.random() * 25) + 1),
      message: faker.lorem.words(100),
      createdAt: faker.date.between('2010-01-01', '2020-01-01'),
      updatedAt: new Date()
    })
}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('replys',respondiendoPreguntas,{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('replys',null,{});
  }
};
