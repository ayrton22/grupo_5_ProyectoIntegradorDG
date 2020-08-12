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
    return Transaction;
}