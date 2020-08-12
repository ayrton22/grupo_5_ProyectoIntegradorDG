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
          age: {
            type:dataTypes.INTEGER(3).UNSIGNED,
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
          id_shopping_cart: {
            type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
            allowNull: false,
            references: {
              model: 'Shopping_cart.js',
              key: 'id'
            }
          }
    };

    let config = {
        tableName: 'users'
    };

    const User = sequelize.define(alias, cols, config);
    return User;
}