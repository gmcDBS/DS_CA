var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var timeKeepController = require('../controllers/TimeKeepController');

router.get('/test', timeKeepController.getTest);

router.get('/', timeKeepController.getTimeKeep);
router.post('/', timeKeepController.createTimeKeep);

module.exports = router;