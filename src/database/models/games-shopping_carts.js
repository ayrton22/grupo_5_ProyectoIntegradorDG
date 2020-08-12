module.exports = (sequelize, dataTypes) => {
    let alias = 'Games-shopping_carts';

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
        tableName: 'games-platforms',
    };

    const Games_Platforms = sequelize.define(alias, cols, config);
    return Games_Platforms;
}