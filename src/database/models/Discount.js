module.exports = (sequelize, dataTypes) => {
    let alias = 'Discounts';

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
            percentage_discount: {
              type: dataTypes.INTEGER(10),
            allowNull: false
          }
    };

    let config = {
        tableName: 'discounts',
    };

    const Discount = sequelize.define(alias, cols, config);

    Discount.associate = function (models) {
        Discount.belongsTo(models.Games, {
        as: 'games',
        foreignKey: 'id_game'
      });

    };
    
    return Discount;
}