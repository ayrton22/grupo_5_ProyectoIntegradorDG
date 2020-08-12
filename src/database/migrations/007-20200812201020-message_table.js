'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('message', {
      id: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      id_user: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      message: {
        type: Sequelize.DataTypes.STRING(500),
        allowNull: false
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('message');
  }
};
