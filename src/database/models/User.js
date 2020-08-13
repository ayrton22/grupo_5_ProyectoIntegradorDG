module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';

    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          first_name: {
            type: dataTypes.STRING(60),
            allowNull: false
          },
          last_name: {
            type: dataTypes.STRING(60),
            allowNull: false
          },
          username: {
            type: dataTypes.STRING(25),
            allowNull: false,
            unique: true
          },
          email: {
            type: dataTypes.STRING(75),
            allowNull: false,
            unique: true
          },
          password: {
            type:dataTypes.STRING(100),
            allowNull: false
          },
          gender: {
            type:dataTypes.CHAR(15),
            defaultValue: 'Unspecified'
          },
          birth_date: {
            type:dataTypes.DATE(),
            allowNull: true
          },
          address: {
            type:dataTypes.STRING(100),
            defaultValue: 'Unspecified'
          },
          avatar: {
            type:dataTypes.STRING(100),
            defaultValue: '/image/defaultAvatar'
          },
          admin: {
            type:dataTypes.BOOLEAN(1),
            defaultValue: 0
          }
    };

    let config = {
        tableName: 'users'
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){

      User.belongsToMany(models.Games, {
        as: 'games',
        through: 'games_users',
        foreignKey: 'id_user',
        otherKey: 'id_game',
        timestamps: true
      });
      
      User.hasMany(models.Messages, {
        as: 'message',
        foreignKey: "id_user"
      });

      User.hasMany(models.Transactions, {
        as: 'transactions',
        foreignKey: "id_user"
      });

      User.hasMany(models.User_sales, {
        as: 'user_sales',
        foreignKey: "id_seller_user"
      });

      User.hasMany(models.User_purchases, {
        as: 'user_purchases',
        foreignKey: "id_buyer_user"
      });
    }
    return User;
}