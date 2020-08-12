module.exports = (sequelize, dataTypes) => {
    let alias = 'GamesShopping_carts';

    let cols = {
        id: {
            type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
    
         id_games: {
            type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
            allowNull: false,
            references: {
              model: 'Game.js',
              key: 'id'
            }
          },
            id_shopping_cart: {
              type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
              allowNull: false,
              references: {
                model: 'Shopping_cart.js',
                key: 'id'
              }
            },
    };

    let config = {
        tableName: 'gamesshopping_carts',
    };

    const GamesShopping_carts = sequelize.define(alias, cols, config);
    return GamesShopping_carts;
}