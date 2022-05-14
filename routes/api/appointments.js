const express = require('express');
const router = express.Router();
const appointmentsCtrl = require('../../controllers/api/appointments');

router.post('/', appointmentsCtrl.create);
router.get('/my-schedule', appointmentsCtrl.getAll);
router.delete('/:id', appointmentsCtrl.deleteOne);

module.exports = router;