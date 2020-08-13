module.exports = (sequelize, dataTypes) => {
    let alias = 'Games_Platforms';

    let cols = {
        id: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          id_game: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
          },
          id_platform: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
          }
    };

    let config = {
        tableName: 'games_platforms',
    };

    const Games_Platform = sequelize.define(alias, cols, config);
    return Games_Platform;
}