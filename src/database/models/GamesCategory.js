module.exports = (sequelize, dataTypes) => {
    let alias = 'Games_Categories';

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
        id_category: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }
    };

    let config = {
        tableName: 'games_categories',
    };

    const Games_Category = sequelize.define(alias, cols, config);
    return Games_Category;
}