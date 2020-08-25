module.exports = (sequelize, dataTypes) => {
    let alias = 'Transactions';

    let cols = {
        id: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          id_user: {
            type: dataTypes.INTEGER(100),
            allowNull: false
          },
          total_cost: {
            type: dataTypes.INTEGER(100),
            allowNull: false
          },
          status: {
            type: dataTypes.STRING(10),
            allowNull: false
          },
          delivery: {
            type: dataTypes.STRING(100),
            allowNull: false,
            defaultValue: 'Online'
          },
          payment: {
            type: dataTypes.STRING(50),
            allowNull: false
          }

         
    };

    let config = {
        tableName: 'transactions',
    };

    const Transaction = sequelize.define(alias, cols, config);

    Transaction.associate = function (models) {

    Transaction.belongsToMany(models.Games, {
      as: 'transactions_games',
      through: 'games_transactions',
      foreignKey: 'id_transaction',
      otherKey: 'id_game',
      timestamps: true
    });
    
    Transaction.belongsTo(models.Users, {
      as: 'users',
      foreignKey: "id_user"
    } );

  }
    return Transaction;
}