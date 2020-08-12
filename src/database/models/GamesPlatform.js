module.exports = (sequelize, dataTypes) => {
    let alias = 'Games-Platforms';

    let cols = {
        id: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          id_games: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
          },
          id_platforms: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
          }
    };

    let config = {
        tableName: 'games-platforms',
    };

    const Games_Platforms = sequelize.define(alias, cols, config);
    return Games_Platforms;
}