const { Association } = require("sequelize");
const db = require("../database/models");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
  allPosts: (req, res) => {
    res.render("posts", {
      title: "Posts",
    });
  },
  userPosts: async (req, res) => {
   
    const postsAll = await db.posts.findAll({
      /* order:[["createdAt",'DESC']], */
      include: [{
          association: "user",
          attributes: ["id", "name"]
      }
     
      ],
    });
     res.render("userPosts",
     {  
     title: "Mis Posts",
     post : postsAll,
     toThousand
     })
    /* res.render("userPosts", {
      title: "Mis posts",
    }); */
  },
  createPost: (req, res) => {
    res.render("createPost", {
      title: "Crear",
    });
  },
  savePost: async (req, res) => {
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

    const newPost = await db.posts.create({
      title: title.trim(),
      category: category.trim(),
      state: estado.trim(),
      content: content.trim(),
      price: price,
      imageOne: req.files && req.files.imageOne ? req.files.imageOne[0].filename : "",
      imageTwo: req.files && req.files.imageTwo ? req.files.imageTwo[0].filename : "",
      imageThree: req.files && req.files.imageThree ? req.files.imageThree[0].filename : "",
      userId: req.session.userLogin.id
    });
    /* console.log(req.body) */
    res.redirect("userPosts");
  },
};
