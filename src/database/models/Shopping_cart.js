module.exports = (sequelize, dataTypes) => {
    let alias = 'Shopping_carts';

    let cols = {
        id: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          total_cost: {
            type: dataTypes.INTEGER(10),
            allowNull: false
          },
          quantity: {
            type: dataTypes.INTEGER(1),
            allowNull: false
      },
    };

    let config = {
        tableName: 'shopping_carts',
    };

    const Shopping_carts = sequelize.define(alias, cols, config);
    return Shopping_carts;
}