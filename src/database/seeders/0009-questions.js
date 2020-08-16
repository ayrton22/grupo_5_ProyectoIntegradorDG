'use strict';
const faker = require('faker');

const creandoPreguntas = [];

for(let i = 1; i <=25; i++){
  creandoPreguntas.push({
      id: i,
      id_user: (Math.floor(Math.random() * 25) + 1),
      message: faker.lorem.words(50),
      createdAt: faker.date.between('2010-01-01', '2020-01-01'),
      updatedAt: new Date()
    })
}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('questions',creandoPreguntas,{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('questions',null,{});
  }
};
