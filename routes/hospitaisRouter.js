const express = require("express");
const router = express.Router();
const HospitaisController = require("../controllers/HospitaisController");

router.get('/hospitais', HospitaisController.index);
router.post('/hospitais', HospitaisController.store);
router.put('/hospitais/:id', HospitaisController.update);
router.delete('/hospitais', HospitaisController.delete);

module.exports = router;