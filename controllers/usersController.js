const fs = require("fs");
const { validationResult } = require("express-validator");
const db = require("../database/models");
const { hashSync } = require("bcryptjs");

module.exports = {
  profile: (req, res) => {
    res.render("profile", {
      title: "Mi Perfil",
    });
  },
 
  login: (req, res) => {
    res.render("login",{
      title: "Ingresar!"
    });
  },
  loadLogin: async (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      try {
        
        const userLoad = await db.users.findOne({
          where: {
            email: req.body.email,
          },
          attributes: ["id", "name", "surname", "addres","phone", "avatar", "email"],
      
        });
        req.session.userLogin = {
          id: userLoad.id,
          name: userLoad.name,
          surname:userLoad.surname,
          addres:userLoad.addres,
          phone:userLoad.phone,
          avatar:userLoad.avatar,
          email: userLoad.email
        };
  /*       res.send(req.session.userLogin) */
        /* guarda en cookies */
        if (req.body.remember) {
          res.cookie('forSale', req.session.userLogin, { maxAge: 10000 * 60 })
      }
      console.log(req.body.remember)
        return res.redirect("profile");
      } catch (error) {
        /* Aca me daria errores de base de datos */
        console.log(error);
      }
    } else {
      
      /* aca me daria los errores de las validaciones */
 /*     return res.send(errors.mapped()) */

      return res.render('login', {
        title: 'Ingresar!',
        errors: errors.mapped(),
        old: req.body,
    })
    }
  },
  logOut: (req, res) => {
   req.session.destroy();
   res.cookie('forSale', '');
   return res.redirect("/users/login");
  },
  register: (req, res) => {
    res.render("register", {
      title: "Registrate!",
    });
  },
  saveRegister: async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      try {
        const {
          name,
          surname,
          addres,
          phone,
          avatar,
          email,
          password,
        } = req.body;
        const newUser = await db.users.create({
          name: name.trim(),
          surname: surname.trim(),
          addres: addres.trim(),
          phone: phone,
          avatar:  req.file ? req.file.filename : "userDefault.png",
          email: email.trim(),
          password: hashSync(password, 12),
        });
        return res.redirect("login");
      } catch (error) {
        console.log(error);
      }
    } else {
      return res.render("register",{
        title: "Registrate!",
        errors: errors.mapped(),
         old: req.body
      } );
     
    }
  },
};
