'use strict';
const bcrypt = require('bcrypt');
const faker = require('faker');

const users=[];

const imgArray = ['Avatar_default_1.jpg', 'Avatar_default_2.jpg', 'Avatar_default_3.jpg', 'Avatar_default_4.jpg', 'Avatar_default_5.jpg', 'Avatar_default_6.jpg', 'Avatar_default_7.jpg', 'Avatar_default_8.jpg'];

for(let i = 1; i <=25; i++){
  users.push({
      id: i,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      username: String(faker.lorem.word() + i ),
      email: faker.internet.email(),
      password: bcrypt.hashSync(faker.internet.password(16), 10),
      gender: Math.floor(Math.random() * 2)== 1 ? 'F' : 'M',
      birth_date: new Date(faker.date.between('1990-01-01', '2015-01-01')),
      address: String(faker.address.country() + ', ' + faker.address.state() + ', ' + faker.address.city() + ', ' + faker.address.streetAddress()), 
      avatar: imgArray[Math.floor(Math.random() * (8 - 0) + 0)],
      admin: Math.floor(Math.random() * 2),
      createdAt: new Date(),
      updatedAt: new Date()
    })
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users, {})},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users',null,{});
  }
};
