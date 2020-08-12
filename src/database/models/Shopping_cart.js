module.exports = (sequelize, dataTypes) => {
    let alias = 'Shopping_carts';

    let cols = {
        id: {
            type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          total_cost: {
            type: Sequelize.DataTypes.INTEGER(10),
            allowNull: false
          },
          quantity: {
            type: Sequelize.DataTypes.INTEGER(1),
            allowNull: false
      },
    };

    let config = {
        tableName: 'shopping_carts',
    };

    const Shopping_carts = sequelize.define(alias, cols, config);
    return Shopping_carts;
}