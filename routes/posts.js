const router = require('express').Router()
const {allPosts, createPost, savePost, userPosts} = require("../controllers/postsController")


const {     uploadPostsImage
} = require('../middlewares/uploadImagePost');

const localUserCheck = require("../middlewares/localUserCheck")
const checkUserLog = require("../middlewares/checkUserLog")

/* GET home page. */
router.get('/', allPosts)
.get('/userPosts', checkUserLog, userPosts)
.get('/crear', checkUserLog,  createPost)
.post('/crear', uploadPostsImage,  savePost)


module.exports = router;
