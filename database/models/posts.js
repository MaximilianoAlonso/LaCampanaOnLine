'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      posts.belongsTo(models.users, {
        as: "user",
        foreignKey: "userId",
        onDelete: "cascade",
      });
    }
  }
  posts.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    state: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER,
    imageOne: DataTypes.STRING,
    imageTwo: DataTypes.STRING,
    imageThree: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};