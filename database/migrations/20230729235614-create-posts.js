'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.INTEGER
      },
      imageOne: {
        type: Sequelize.STRING
      },
      imageTwo: {
        type: Sequelize.STRING
      },
      imageThree: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      deletedAt: {
         allowNull: true,
         type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts');
  }
};