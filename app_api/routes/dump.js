var express = require('express');
var todoCtrl = require('../controllers/todoCtrl');
var router = express.Router();



router.delete('/dump', todoCtrl.dump);


module.exports = router;
