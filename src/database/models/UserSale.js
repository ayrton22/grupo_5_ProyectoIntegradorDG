module.exports = (sequelize, dataTypes) => {
    let alias = 'User_sales';

    let cols = {
      id: {
        type: dataTypes.INTEGER(100).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      id_game: {
        type: dataTypes.INTEGER(100).UNSIGNED,
        allowNull: false,
        references: {
          model: 'Games',
          key: 'id'
        }
      },
      id_seller_user: {
        type: dataTypes.INTEGER(100).UNSIGNED,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      id_buyer_user:{
            type: dataTypes.INTEGER(100).UNSIGNED,
            allowNull: true,
          references: {
            model: 'Users',
            key: 'id'
            },
            defaultValue: null
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
        }
    
  }
    let config = {
        tableName: 'user_sales',
    };

    const User_sale = sequelize.define(alias, cols, config);

    User_sale.associate = function(models){

      User_sale.belongsTo(models.Users, {
        as: 'users',
        foreignKey: "id_seller_user"
      } );

      User_sale.belongsTo(models.Games, {
        as: 'games',
        foreignKey: "id_game"
      });
    }
    return User_sale;
}