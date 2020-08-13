module.exports = (sequelize, dataTypes) => {
    let alias = 'User_sales';

    let cols = {
        id: {
            type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          id_juego: {
            type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
            allowNull: false,
            references: {
              model: 'Games.js',
              key: 'id'
            }
          },
          id_seller_user: {
            type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
            allowNull: false,
            references: {
              model: 'Users.js',
              key: 'id'
            }
        },
            game_status: {
              type: dataTypes.STRING(60),
              allowNull: false
            },
            payment: {
              type: dataTypes.STRING(60),
              allowNull: false
            },
            price: {
              type: dataTypes.DECIMAL(50, 2),
              allowNull: false
            },
            status_transaction: {
              type: dataTypes.STRING(60),
              allowNull: false
            },
            delivery_type: {
              type: dataTypes.STRING(60),
              allowNull: false
            
        },
    }
    let config = {
        tableName: 'user_sales',
    };

    const User_sale = sequelize.define(alias, cols, config);
    return User_sale;
}