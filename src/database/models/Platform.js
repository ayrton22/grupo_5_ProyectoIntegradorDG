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
          },
          icono: {
            type: dataTypes.STRING(100),
            allowNull: false
          }
    };

    let config = {
        tableName: 'platforms',
    };

    const Platform = sequelize.define(alias, cols, config);

    Platform.associate = function (models) {
      Platform.belongsToMany(models.Games, {

        as: 'games',
        through: 'games_platforms',
        foreignKey: 'id_platform',
        otherKey: 'id_game',
        timestamps: true
      });

    };
    
    return Platform;
}