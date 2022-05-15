const express = require('express');
const router = express.Router();
const tackCtrl = require('../../controllers/api/tacks');

router.post('/', tackCtrl.create);
router.get('/tack', tackCtrl.getAll);
router.delete('/:id', tackCtrl.deleteOne);

module.exports = router;