'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_purchases', {
    id: {
      type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    id_buyer_user: {
      type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    id_sale: {
      type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
      allowNull: false,
      references: {
        model: 'User_sales',
        key: 'id'
      }
    },
    status_transaction: {
      type: Sequelize.DataTypes.STRING(500),
      allowNull: false
    },
    createdAt: Sequelize.DataTypes.DATE,
    updatedAt: Sequelize.DataTypes.DATE
  })
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_purchases');
  }
};
