module.exports = (sequelize, dataTypes) => {
    let alias = 'Transactions';

    let cols = {
        id: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          total_cost: {
            type: dataTypes.INTEGER(100),
            allowNull: false
          },
          status: {
            type: dataTypes.STRING(10),
            allowNull: false
          },
          quantity: {
            type: dataTypes.INTEGER(100),
            allowNull: false
          },
          payment: {
            type: dataTypes.STRING(50),
            allowNull: false
          },
          id_user: {
            type: dataTypes.INTEGER(100),
            allowNull: false
          },
    };

    let config = {
        tableName: 'transactions',
    };

    const Transaction = sequelize.define(alias, cols, config);

    Transaction.associate = function (models) {

    Transaction.belongsToMany(models.Games, {
      as: 'transactions',
      through: 'games_transactions',
      foreignKey: 'id_transaction',
      otherKey: 'id_game',
      timestams: true
    });
    
    Transaction.belongsTo(models.Users, {
      as: 'users',
      foreignKey: "id_user"
    } );

  }
    return Transaction;
}