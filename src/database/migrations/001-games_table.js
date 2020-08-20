'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('games', {
      id: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.DataTypes.STRING(60),
        allowNull: false
      },
      description: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
      },
      descriptionMedium: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
      },
      descriptionBig: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type:Sequelize.DataTypes.DECIMAL(50, 2),
        allowNull: false
      },
      video: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      launch_date: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      editor: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
      },
      developer: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
      },
      classification: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false
      },
      rating: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      stock_user: {
        type: Sequelize.DataTypes.INTEGER(100),
        allowNull: true
      },
      stock_admin: {
        type: Sequelize.DataTypes.INTEGER(100),
        allowNull: true
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
      })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('games')
  }
};
