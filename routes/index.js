const router = require('express').Router()
const {home, contact, faq, search} = require("../controllers/indexController")

/* GET home page. */
router.get('/', home)
      .get('/contact', contact)
      .get('/faq', faq)
      .get("/search", search)
module.exports = router;
