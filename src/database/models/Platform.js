module.exports = (sequelize, dataTypes) => {
    let alias = 'Platforms';

    let cols = {
        id: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: dataTypes.STRING(50),
            allowNull: false
          }
    };

    let config = {
        tableName: 'platforms',
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {
      Category.belongsToMany(models.Games, {

        as: 'games',
        through: 'games_categories',
        foreignKey: 'id_categorie',
        otherKey: 'id_game',
        timestamps: true
      });

    };
    
    return Category;
}