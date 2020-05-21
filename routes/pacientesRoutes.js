const express = require('express');
const router = express.Router();
const PacientesController = require("../controllers/PacientesController");

router.get('/pacientes',PacientesController.index);


module.exports = router; 

