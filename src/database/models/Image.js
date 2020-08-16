module.exports = (sequelize, dataTypes) => {
    let alias = 'Images';

    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
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
        location: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        img_url: {
            type: dataTypes.STRING(500),
        }
        
    };

    let config = {
        tableName: 'images',
    };

    const Image = sequelize.define(alias, cols, config);
    
    Image.associate = function (models) {
        Image.belongsTo(models.Games, {
            as: 'games',
            foreignKey: 'id_game'
        })
    }
    return Image;
}