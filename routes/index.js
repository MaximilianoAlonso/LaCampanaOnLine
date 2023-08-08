const router = require('express').Router()
const {home, contact, faq} = require("../controllers/indexController")

/* GET home page. */
router.get('/', home)
      .get('/contact', contact)
      .get('/faq', faq)
module.exports = router;
