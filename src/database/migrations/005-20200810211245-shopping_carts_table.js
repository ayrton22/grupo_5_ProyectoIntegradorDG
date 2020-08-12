'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('shopping_carts', {
      id: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      total_cost: {
        type: Sequelize.DataTypes.INTEGER(10),
        allowNull: false
      },
      quantity: {
        type: Sequelize.DataTypes.INTEGER(1),
        allowNull: false
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('shopping_carts')
  }
};
