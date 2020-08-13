module.exports = (sequelize, dataTypes) => {
    let alias = 'Genres';

    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
        name: {
          type: dataTypes.STRING(30),
          allowNull: false
        }
    };
    let config = {
        tableName: 'genres',
    };

    const Genre = sequelize.define(alias, cols, config);

    Genre.associate = function (models) {
      Game.belongsToMany(models.Games, {

        as: 'games',
        through: 'games_genres',
        foreignKey: 'id_genre',
        otherKey: 'id_game',
        timestams: true
      });

    return Genre;
}