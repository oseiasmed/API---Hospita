const express = require("express");

const Paciente = require("../models/Paciente");

// Criar pacientes

exports.store = (req, res, next) => {

    var { nome, cpf, endereco, numero, dtnascimento, complemento, bairro, cidade, uf } = req.body;

    Paciente.create({

        nome, cpf, endereco, numero, dtnascimento, complemento, bairro, cidade, uf

    }).then(() => {

        res.status(200).send('Paciente criado com sucesso');

    }).catch(error => {

        res.status(400).send('Erro ao criar o paciente');

    });
};

// Listar pacientes

exports.index = (req, res, next) => {

    Paciente.findAll().then(pacientes => {

        res.status(200).send(pacientes);

    }).catch(error => {

        res.status(400).send('Erro ao listar os pacientes');

    });
};

// Editar pacientes

exports.update = (req, res) => {

    var id = req.params.id;
    var { nome, cpf, endereco, numero, dtnascimento, complemento, bairro, cidade, uf } = req.body;

    Paciente.update({

        nome, cpf, endereco, numero, dtnascimento, complemento, bairro, cidade, uf

    }, {

        where: {

            id: id
        }

    }).then(() => {

        res.status("200").send("Paciente editado com sucesso");

    }).catch(error => {

        res.status(400).send("Erro ao editar paciente " + error)

    })
};

// Deletar pacientes

exports.delete = (req, res, next) => {

    var id = req.body.id;

    if (id != undefined) {

        if (!isNaN(id)) {

            Paciente.destroy({

                where: {
                    id: id
                }
            }).then(() => {

                res.status(200);
                res.send("Paciente removido com sucesso.")
            });

        } else {

            res.status(400);
        }

    } else {

        res.status(400);
    }
};





