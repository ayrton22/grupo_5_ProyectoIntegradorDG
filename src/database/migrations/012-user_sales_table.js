'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_sales', {
      id: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      id_game: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        allowNull: true,
        references: {
          model: 'Games',
          key: 'id'
        }
      },
      id_seller_user: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      id_buyer_user:{
            type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
            allowNull: true,
          references: {
            model: 'Users',
            key: 'id'
            },
            defaultValue: null
        },
        game_status: {
          type: Sequelize.DataTypes.STRING(60),
          allowNull: false
        },
        payment: {
          type: Sequelize.DataTypes.STRING(60),
          allowNull: false
        },
        price: {
          type: Sequelize.DataTypes.DECIMAL(50, 2),
          allowNull: false
        },
        status_transaction: {
          type: Sequelize.DataTypes.STRING(60),
          allowNull: false
        },
        delivery_type: {
          type: Sequelize.DataTypes.STRING(60),
          allowNull: false
        },
        
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
    })


  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_sales');

  }
};
