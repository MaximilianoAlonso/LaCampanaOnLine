const { Association } = require("sequelize");
const db = require("../database/models");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const { validationResult } = require("express-validator");

module.exports = {
  allPosts: async (req, res) => {
    try {
      const postsAll = await db.posts.findAll();
      const categoryFilt = req.params.category;
      const filterCategory = postsAll.filter(product => product.category == categoryFilt)


     console.log(postsAll); 
      res.render("posts", {
        title: "Publicaciones",
        post: postsAll,
        filterCategory,
        toThousand,
        categoryFilt,

      });
    } catch (error) {
      console.log(errors);
    }
  },
  detail: async (req,res) => {
    const {id} = req.params;
    try {
      
      const oneProduct = await db.posts.findByPk(id,{
        include : [
          {
              model: db.users,
              as: "user",
            }
        ]
      }
      )
      
 /*      res.send(oneProduct)  */
    res.render("detail", {
      title: "Detalles",
      oneProduct,
      user : oneProduct.users,
      toThousand
    }) 

    } catch (error) {
      
    }

  },
  userPosts: async (req, res) => {
    try {
      const postsAll = await db.posts.findAll({
        include: [
          {
            association: "user",
            attributes: ["id", "name"],
          },
        ],
      });
      res.render("userPosts", {
        title: "Mis Publicaciones",
        post: postsAll,
        toThousand,
      });
    } catch (error) {
      console.log(error);
    }
  },
  createPost: (req, res) => {
    res.render("createPost", {
      title: "Crear",
    });
  },
  savePost: async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
         const {
      title,
      category,
      estado,
      content,
      price,
      imageOne,
      imageTwo,
      imageThree,
    } = req.body;
    try {
      const newPost = await db.posts.create({
        title: title.trim(),
        category: category.trim(),
        state: estado.trim(),
        content: content.trim(),
        price: price,
        imageOne:
          req.files && req.files.imageOne ? req.files.imageOne[0].filename : undefined,
        imageTwo:
          req.files && req.files.imageTwo ? req.files.imageTwo[0].filename : "",
        imageThree:
          req.files && req.files.imageThree
            ? req.files.imageThree[0].filename
            : "",
        userId: req.session.userLogin.id,
      });
      /* console.log(req.body) */
      res.redirect("userPosts");
    } catch (error) {
      console.log(error);
    }
    }else{
     res.send(errors.mapped())
    /*   return res.render('createPost', {
        title: 'Crear!',
        errors: errors.mapped(),
        old: req.body,
    }) */
    }
 
  },
  postForCategory: async (req,res) => {
    try {
      const categoryFilt = req.params.category;

      const products = await db.posts.findAll()

      const filterCategory = products.filter(product => product.category == categoryFilt)

      res.render("userPosts", {
        title: "Mis Publicaciones",
        categoryFilt,
          ...filterCategory,
        toThousand
      })
    } catch (error) {
      console.log(error)
    }
  


  }
};
