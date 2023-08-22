"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "posts",
      [
    {
        title: "Television",
        category:"Electrónica",
        state: "Nuevo",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, provident temporibus. Aut deserunt recusandae libero vero iusto nesciunt veniam ex!",
        price: 15000,
        imageOne:"tv.jpg",
        userId:1,
        createdAt:new Date() 
    },
    {
        title: "Celular a20",
        category:"Electrónica",
        state: "Usado",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, provident temporibus. Aut deserunt recusandae libero vero iusto nesciunt veniam ex!",
        price: 50000,
        imageOne:"celu.jpg",
        userId:1,
        createdAt:new Date() 
    },
    {
        title: "Lavarropas",
        category:"Electrónica",
        state: "Nuevo",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, provident temporibus. Aut deserunt recusandae libero vero iusto nesciunt veniam ex!",
        price: 150000,
        imageOne:"lavarropas.jpg",
        userId:1,
        createdAt:new Date() 
    },
    {
        title: "Perfume",
        category:"Belleza-y-Cuidado-Personal",
        state: "Nuevo",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, provident temporibus. Aut deserunt recusandae libero vero iusto nesciunt veniam ex!",
        price: 15000,
        imageOne:"perfume.jpg",
        userId:1,
        createdAt:new Date() 
    }, {
      title: "Television",
      category:"Belleza-y-Cuidado-Personal",
      state: "Nuevo",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, provident temporibus. Aut deserunt recusandae libero vero iusto nesciunt veniam ex!",
      price: 15000,
      imageOne:"tv.jpg",
      userId:1,
      createdAt:new Date() 
  },
  {
      title: "Celular a20",
      category:"Belleza-y-Cuidado-Personal",
      state: "Usado",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, provident temporibus. Aut deserunt recusandae libero vero iusto nesciunt veniam ex!",
      price: 50000,
      imageOne:"celu.jpg",
      userId:1,
      createdAt:new Date() 
  },
  {
      title: "Lavarropas",
      category:"Belleza-y-Cuidado-Personal",
      state: "Nuevo",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, provident temporibus. Aut deserunt recusandae libero vero iusto nesciunt veniam ex!",
      price: 150000,
      imageOne:"lavarropas.jpg",
      userId:1,
      createdAt:new Date() 
  },
  {
      title: "Perfume",
      category:"Belleza-y-Cuidado-Personal",
      state: "Nuevo",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, provident temporibus. Aut deserunt recusandae libero vero iusto nesciunt veniam ex!",
      price: 15000,
      imageOne:"perfume.jpg",
      userId:1,
      createdAt:new Date() 
  },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("posts", null, {});
  },
};

