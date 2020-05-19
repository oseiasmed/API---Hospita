const express = require("express");
const router = express.Router();
const Paciente = require("./Paciente");

router.get("/pacientes/cadastar", (req, res) => {

    res.render("pacientes/new")
})

// List Patients /* Teste */

router.get("/pacientes", (req, res, next) => {

    Paciente.findAll().then(pacientes => {

        res.status(200).send(pacientes);
    })
});

module.exports = router;