'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: Sequelize.DataTypes.STRING(60),
        allowNull: false
      },
      last_name: {
        type: Sequelize.DataTypes.STRING(60),
        allowNull: false
      },
      username: {
        type: Sequelize.DataTypes.STRING(25),
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.DataTypes.STRING(75),
        allowNull: false,
        unique: true
      },
      password: {
        type:Sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      gender: {
        type:Sequelize.DataTypes.CHAR(15),
        defaultValue: 'Unspecified'
      },
      birth_date: {
        type:Sequelize.DataTypes.DATE(),
        allowNull: true
      },
      address: {
        type:Sequelize.DataTypes.STRING(100),
        defaultValue: 'Unspecified'
      },
      avatar: {
        type:Sequelize.DataTypes.STRING(100),
        defaultValue: '/image/defaultAvatar'
      },
      admin: {
        type:Sequelize.DataTypes.BOOLEAN(1),
        defaultValue: 0
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};
