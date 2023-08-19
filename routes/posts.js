const router = require('express').Router()
const {allPosts, detail, createPost, savePost, userPosts} = require("../controllers/postsController")


const {     uploadPostsImage
} = require('../middlewares/uploadImagePost');

const checkUserGuest = require("../middlewares/checkUserGuest")
const postValidator = require("../validations/postValidator")

/* GET home page. */
router.get('/', allPosts)
.get('/detalle/:id', detail)
.get('/userPosts', checkUserGuest, userPosts)
.get('/crear', checkUserGuest,  createPost)
.post('/crear', uploadPostsImage, postValidator,  savePost)
.get('/:category?', allPosts)


module.exports = router;
