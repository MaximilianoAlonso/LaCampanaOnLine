const db = require("../database/models")
const Op = db.Sequelize.Op
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    home: (req,res) => {
        res.render("index", {
            title: "HOME | Bienvenid@"
        })
    },
    search: async (req,res) => {
        const keywords = req.query.search;
        try {
            const searchProduct = await db.posts.findAll({
                where:{
                    [Op.or]: [
                      { title: {[Op.like]: `%${keywords}%`} },
                      { content: {[Op.like]: `%${keywords}%`} },
                    ]
                  }
            })
            res.render("result",{
                title:"resultados",
                searchProduct,
                keywords,
                toThousand
            })
            
            
        } catch (error) {
            console.log(error)
        }

    },
    contact: (req,res) => {
        res.render("contact", {
            title: "Contacto"
        })
    },
    faq: (req,res) => {
        res.render("faq", {
            title: "Preguntas Frecuentes"
        })
    },   
}

