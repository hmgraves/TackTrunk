const express = require('express');
const router = express.Router();
const servicesCtrl = require('../../controllers/api/services');

router.get('/', servicesCtrl.getAll);

module.exports = router;