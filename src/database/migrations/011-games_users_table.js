'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('games_users', {
      id: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },

     id_game: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        allowNull: false,
        references: {
          model: 'Games',
          key: 'id'
        }
      },
        id_user: {
          type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
          allowNull: false,
          references: {
            model: 'Users',
            key: 'id'
          }
        },
        
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
    })

  
  },
  
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('games_users');
  
  }
};
