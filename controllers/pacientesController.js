const express = require("express");
const router = express.Router();
const Paciente = require("../models/Paciente");

// Listar pacientes

router.get("/pacientes", (req, res) => {

    Paciente.findAll().then(pacientes => {

        res.status(200).send(pacientes);

    }).catch(error => {

        res.status(400).send('Erro ao listar os pacientes');

    });
});

module.exports = router;