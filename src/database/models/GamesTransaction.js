module.exports = (sequelize, dataTypes) => {
    let alias = 'GamesTransactions';

    let cols = {
        id: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          id_game: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            allowNull: false
          },
          id_transaction: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            allowNull: false
          }
    };

    let config = {
        tableName: 'games-transactions',
    };

    const GameTransaction = sequelize.define(alias, cols, config);
    return GameTransaction;
}