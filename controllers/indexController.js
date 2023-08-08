
module.exports = {
    home: (req,res) => {
        res.render("index", {
            title: "HOME | Bienvenid@"
        })
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

