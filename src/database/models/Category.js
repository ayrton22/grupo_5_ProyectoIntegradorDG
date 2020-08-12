module.exports = (sequelize, dataTypes) => {
    let alias = 'Categories';

    let cols = {
        id: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: dataTypes.STRING(50),
            allowNull: false
          }
    };

    let config = {
        tableName: 'categories',
    };

    const Category = sequelize.define(alias, cols, config);
    return Category;
}