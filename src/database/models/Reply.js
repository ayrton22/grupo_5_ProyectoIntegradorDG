module.exports = (sequelize, dataTypes) => {
    let alias = 'Replys';

    let cols = {
        id: {
        type: dataTypes.INTEGER(100).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      id_question: {
        type: dataTypes.INTEGER(100).UNSIGNED,
        allowNull: false,
        references: {
          model: 'Questions',
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
      message: {
        type: dataTypes.TEXT,
        allowNull: false
      },
    };

    let config = {
        tableName: 'replys',
    };

    const Reply = sequelize.define(alias, cols, config);

    Reply.associate = function(models){

        Reply.belongsTo(models.Questions, {
        as: 'questions',
        foreignKey: "id_question"
      } );
      
      Reply.belongsTo(models.Users, {
        as: 'users',
        foreignKey: "id_user"
      } );
    }
    return Reply;
}