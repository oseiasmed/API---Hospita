const express = require("express");

const authentication = require("../middlewares/adminauth");
const Paciente = require("../models/Paciente");

// Listar pacientes

exports.index = (req, res) => {

    Paciente.findAll().then(pacientes => {

        res.status(200).send(pacientes);

    }).catch(error => {

        res.status(400).send('Erro ao listar os pacientes');

    });
}




