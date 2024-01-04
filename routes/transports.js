var express = require('express');
var router = express.Router();
var transportsCtrl = require('../controllers/transports')




router.get('/', transportsCtrl.index);

router.get('/:id', transportsCtrl.show);

module.exports = router;
