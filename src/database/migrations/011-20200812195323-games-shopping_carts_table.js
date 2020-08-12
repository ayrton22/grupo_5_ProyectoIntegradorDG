'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('games-shopping_carts', {
      id: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },

     id_games: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        allowNull: false,
        references: {
          model: 'Games',
          key: 'id'
        }
      },
        id_shopping_cart: {
          type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
          allowNull: false,
          references: {
            model: 'Shopping_carts',
            key: 'id'
          }
        },
        
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
    })

  
  },
  
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('games-shopping_carts');
  
  }
};
