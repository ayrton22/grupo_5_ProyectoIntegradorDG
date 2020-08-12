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
    return Genre;
}