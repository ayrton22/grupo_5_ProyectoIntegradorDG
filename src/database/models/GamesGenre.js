module.exports = (sequelize, dataTypes) => {
    let alias = 'Games_Genres';

    let cols = {
        id: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
        id_game: {
        type: dataTypes.INTEGER(100).UNSIGNED,
        allowNull: false
            },
        id_genre: {
        type: dataTypes.INTEGER(100).UNSIGNED,
        allowNull: false
        }
    };

    let config = {
        tableName: 'games_genres',
    };

    const Games_Genre = sequelize.define(alias, cols, config);
    return Games_Genre;
}