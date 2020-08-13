module.exports = (sequelize, dataTypes) => {
    let alias = 'User_purchases';

    let cols = {
        id: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          id_buyer_user: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            allowNull: false,
            references: {
              model: 'User.js',
              key: 'id'
            }
          },
          id_sale: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            allowNull: false,
            references: {
              model: 'User_sales.js',
              key: 'id'
            }
          },
          status_transaction: {
            type: dataTypes.STRING(500),
            allowNull: false
          },
    }
    let config = {
        tableName: 'user_purchases',
    };

    const User_purchases = sequelize.define(alias, cols, config);
    return User_purchases;
}