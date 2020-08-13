module.exports = (sequelize, dataTypes) => {
    let alias = 'Messages';

    let cols = {
        id: {
        type: dataTypes.INTEGER(100).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      id_user: {
        type: dataTypes.INTEGER(100).UNSIGNED,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      message: {
        type: dataTypes.STRING(500),
        allowNull: false
      },
    };

    let config = {
        tableName: 'messages',
    };

    const Message = sequelize.define(alias, cols, config);

    Message.associate = function(models){
      Message.belongsTo(models.Users, {
        as: 'users',
        foreignKey: "id_user"
      } );
    }
    return Message;
}