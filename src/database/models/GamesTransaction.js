module.exports = (sequelize, dataTypes) => {
    let alias = 'Games_Transactions';

    let cols = {
        id: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          id_game: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            allowNull: true
          },
          id_transaction: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            allowNull: false
          }
    };

    let config = {
        tableName: 'games_transactions',
    };

    const Game_Transaction = sequelize.define(alias, cols, config);
    return Game_Transaction;
}