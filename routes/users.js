const router = require('express').Router()
const {profile, userPosts, login, register, saveRegister, loadLogin, logOut} = require("../controllers/usersController")

const {upload} = require("../middlewares/uploadImageUser")
const userValidation = require("../validations/loginValidation")

const localUserCheck = require("../middlewares/localUserCheck")
const checkUserLog = require("../middlewares/checkUserLog")

/* GET users listing. */
router.get('/profile', localUserCheck, profile)
    .get('/login', login)
    .post('/login',userValidation, loadLogin)
    .get("/logOut", logOut)
    .get('/register', register)
    .post('/register',upload.single('avatar'), saveRegister)
    

module.exports = router;
