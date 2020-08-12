module.exports = (sequelize, dataTypes) => {
    let alias = 'Images';

    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
        type: dataTypes.STRING(100),
        allowNull: false,
        },
        img_url: {
        type: dataTypes.STRING(200),
        unique: true
        },
        id_game: {
        type: dataTypes.INTEGER(100).UNSIGNED,
        allowNull: false,
        references: {
            model: 'Games',
            key: 'id'
          }
        }
    };

    let config = {
        tableName: 'images',
    };

    const Image = sequelize.define(alias, cols, config);
    return Image;
}