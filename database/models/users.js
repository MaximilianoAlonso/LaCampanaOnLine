'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      users.hasMany(models.posts, {
        as: "post",
        foreignKey: "userId",
        onDelete: "cascade",
      });
    }
  }
  users.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    addres: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    avatar: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};