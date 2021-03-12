const router   = require('express').Router();
const ctrl      = require('../controllers');

router.post('/test', ctrl.test);

module.exports = router;