const router = require('express').Router()
const {profile, userPosts, login, register, saveRegister, loadLogin, logOut} = require("../controllers/usersController")

const {upload} = require("../middlewares/uploadImageUser")
const userValidation = require("../validations/loginValidation")
const registerValidation = require("../validations/registerValidation")
const checkUserLogin = require("../middlewares/checkUserLogin")
const checkUserGuest = require("../middlewares/checkUserGuest")

/* GET users listing. */
router.get('/profile', checkUserGuest, profile)
    .get('/login',checkUserLogin, login)
    .post('/login',userValidation, loadLogin)
    .get("/logOut", logOut)
    .get('/register',register)
    .post('/register', upload.single('avatar'), registerValidation, saveRegister)
    

module.exports = router;
