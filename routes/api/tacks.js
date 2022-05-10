const express = require('express');
const router = express.Router();
const tackCtrl = require('../../controllers/api/tacks');

router.post('/tack/new', tackCtrl.create);
router.delete('/:id', tackCtrl.delete);

module.exports = router;