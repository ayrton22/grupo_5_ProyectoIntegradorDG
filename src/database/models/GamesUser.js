module.exports = (sequelize, dataTypes) => {
    let alias = 'Games_Users';

    let cols = {
        id: {
            type: dataTypes.INTEGER(100).UNSIGNED,
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
            id_user: {
              type: dataTypes.INTEGER(100).UNSIGNED,
              allowNull: false,
              references: {
                model: 'Users',
                key: 'id'
              }
            },
    };

    let config = {
        tableName: 'games_users',
    };

    const Games_User = sequelize.define(alias, cols, config);
    return Games_User;
}