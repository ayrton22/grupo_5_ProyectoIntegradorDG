'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('games_platforms', {
      id: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      id_game: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        references: {
          model: 'Games',
          key: 'id'
        }
      },
      id_platform: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        references: {
          model: 'Platforms',
          key: 'id'
        }
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('games_platforms')
  }
};
