'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('transactions', {
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
      total_cost: {
        type: Sequelize.DataTypes.INTEGER(100),
        allowNull: false
      },
      status: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false
      },
      delivery: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'Online'
      },
      payment: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('transactions')
  }
};
