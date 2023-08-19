const fs = require("fs");
const path = require("path");
const { check, body } = require("express-validator");
const db = require("../database/models");
let regExPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,12}$/;

module.exports = [
    check('name')
        .notEmpty().withMessage('El nombre es obligatorio').bail()
        .isLength({ min: 2 }).withMessage('Mínimo de dos letras').bail()
        .isAlpha('es-ES', {
            ignore: " "
        }).withMessage('Solo caracteres alfabéticos'),
        check('surname')
        .notEmpty().withMessage('El apellido es obligatorio').bail()
        .isLength({ min: 2 }).withMessage('Mínimo de dos letras').bail()
        .isAlpha('es-ES', {
            ignore: " "
        }).withMessage('Solo caracteres alfabéticos'),

    check('phone')
        .notEmpty().withMessage('El Telefono es obligatorio').bail(),

    body('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('Debe ser un email con formato válido')
        .custom((value, { req }) => {
            return db.users.findOne({
                where: {
                    email: value
                }
            }).then(user => {
                if (user) {
                    return Promise.reject()
                }
            }).catch((error) => {
                console.log(error)
                return Promise.reject('El email ya se encuentra registrado')
            })
        }),

    body('password')
        .notEmpty().withMessage('La contraseña es obligatoria').bail()
        .custom((value, { req }) => {
            if (!regExPass.test(value.trim())) {
                return false
            }
            return true
        }).withMessage('Debe tener una mayúscula, una minúscula, un número. y entre 6 y 12 caracteres'),

    body('password2')
        .notEmpty().withMessage('Debes confirmar tu contraseña').bail()
        .custom((value, { req }) => {
            if (value.trim() !== req.body.password) {
                return false
            }
            return true
        }).withMessage('Las contraseñas no coinciden'),

    ]