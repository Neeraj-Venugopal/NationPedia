var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");

/*
 * GET home page.
 */
router.get('/', ctrlMain.frontPage);

router.get('/frontPage', ctrlMain.frontPage);


router.get('/homePage', ctrlMain.home);
/*
 * GET text fields page.
 */
router.get('/aboutLink', ctrlMain.get_about);

/*
 * GET Subscribe page.
 */
router.get('/subscribeLink', ctrlMain.get_subscribe);

/*
 * GET second Page Link.
 */
router.get('/secondPageLink', ctrlMain.get_second_page);
router.post('/secondPageLink', ctrlMain.post_second_page);
module.exports = router;