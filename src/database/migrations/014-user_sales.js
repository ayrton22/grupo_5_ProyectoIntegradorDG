'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_sales', {
      id: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      id_juego: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        allowNull: false,
        references: {
          model: 'Game.js',
          key: 'id'
        }
      },
      id_seller_user: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        allowNull: false,
        references: {
          model: 'User.js',
          key: 'id'
        },
        game_status: {
          type: dataTypes.STRING(60),
          allowNull: false
        },
        payment: {
          type: dataTypes.STRING(60),
          allowNull: false
        },
        price: {
          type: dataTypes.DECIMAL(50, 2),
          allowNull: false
        },
        status_transaction: {
          type: dataTypes.STRING(60),
          allowNull: false
        },
        delivery_type: {
          type: dataTypes.STRING(60),
          allowNull: false
        },
        
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
    })


  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_sales');

  }
};
