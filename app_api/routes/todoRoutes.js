/** GET log-in page. */
var express = require('express');
var todoCtrl = require('../controllers/todoCtrl');
var router = express.Router();



router.get('/', todoCtrl.getAll);
router.post('/', todoCtrl.create);
router.put('/', todoCtrl.update);
router.delete('/:id', todoCtrl.destroy);



module.exports = router;

