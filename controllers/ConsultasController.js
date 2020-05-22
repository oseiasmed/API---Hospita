const express = require("express");
const Consulta = require("../models/Consulta");
const Hospital = require("../models/Hospital");
const Paciente = require("../models/Paciente");
const Status = require("../models/Status");

exports.store = (req, res, next) => {

    var { hospitais, pacientes, dtconsulta, status } = req.body;

    Consulta.create({

        hospitais, pacientes, dtconsulta, status

    }).then(() => {

        res.status(200).send('Consulta criada com sucesso');

    }).catch(error => {

        res.status(400).send('Erro ao criar a consulta');

    });
};

// Listar consultas

exports.index = (req, res, next) => {

    var hospitais;
    var pacientes;
    var status;

    Hospital.findAll().then(h => {

        hospitais = h;

    });

    Paciente.findAll().then(p => {

        pacientes = p;

    });

    Status.findAll().then(st => {

        status = st;

        res.status(200);

        res.send({ hospitais: hospitais, pacientes: pacientes, status: status });

    });
};

// Remover consultas

exports.delete = (req, res, next) => {

    var id = req.body.id;

    if (id != undefined) {

        if (!isNaN(id)) {

            Consulta.destroy({

                where: {

                    id: id
                }

            }).then(() => {

                res.status(200).send('Consulta removida com sucesso');

            });

        } else {

            res.status(400).send('Erro ao romover a consulta');
        }

    } else {

        res.status(400).send('Erro ao romover a consulta');
    };
};
