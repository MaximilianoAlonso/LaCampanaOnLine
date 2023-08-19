const { check, body } = require("express-validator");

module.exports = [
  check("title")
    .notEmpty()
    .withMessage("El titulo es obligatorio"),
    check("category")
    .notEmpty()
    .withMessage("Elije una categoria"),
    check("price")
    .notEmpty()
    .withMessage("Debes poner un precio"),
    check("content")
    .notEmpty()
    .withMessage("Debes describir lo que vendes"),
    check("category")
    .notEmpty()
    .withMessage("Debes elegir una categoria"),

]