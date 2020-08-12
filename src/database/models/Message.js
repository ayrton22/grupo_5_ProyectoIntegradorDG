module.exports = (sequelize, dataTypes) => {
    let alias = 'Messages';

    let cols = {
        id: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      id_user: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        allowNull: false,
        references: {
          model: 'User.js',
          key: 'id'
        }
      },
      message: {
        type: Sequelize.DataTypes.STRING(500),
        allowNull: false
      },
    };

    let config = {
        tableName: 'messages',
    };

    const Messages = sequelize.define(alias, cols, config);
    return Messages;
}