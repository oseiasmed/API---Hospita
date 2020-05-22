const express = require('express');
const router = express.Router();
const PacientesController = require("../controllers/PacientesController");

router.get('/pacientes', PacientesController.index);
router.post('/pacientes', PacientesController.store);
router.put('/pacientes/:id', PacientesController.update);
router.delete('/pacientes', PacientesController.delete);

module.exports = router;

