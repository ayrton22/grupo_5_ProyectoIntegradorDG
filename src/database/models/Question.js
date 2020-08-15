module.exports = (sequelize, dataTypes) => {
    let alias = 'Questions';

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
        tableName: 'questions',
    };

    const Question = sequelize.define(alias, cols, config);

    Question.associate = function(models){
      Question.belongsTo(models.Users, {
        as: 'users',
        foreignKey: "id_user"
      } );
      Question.hasMany(models.Replys, {
        as: 'replys',
        foreignKey: "id_question"
      });
    }
    return Question;
}