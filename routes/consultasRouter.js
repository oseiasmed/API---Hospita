const express = require("express");
const router = express.Router();
const ConsultasController = require("../controllers/ConsultasController");

router.get('/consultas', ConsultasController.index);
router.post('/consultas', ConsultasController.store);
router.delete('/consultas', ConsultasController.delete);

module.exports = router;
