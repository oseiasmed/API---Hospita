const express = require("express");
const Hospital = require("../models/Hospital");

// Criar Hospitais

exports.store = (req, res, next) => {

    var { nome, cnpj, endereco, numero, cep, complemento, bairro, cidade, uf } = req.body;

    Hospital.create({

        nome, cnpj, endereco, numero, cep, complemento, bairro, cidade, uf

    }).then(() => {

        res.status(200).send('Hospital criado com sucesso');

    }).catch(error => {

        res.status(400).send('Erro ao criar o hospital');

    });
};


// Listar hospitais

exports.index = (req, res, next) => {

    Hospital.findAll().then(hospitais => {

        res.status(200).send(hospitais);

    }).catch(error => {

        res.status(400).send('Erro ao listar os hospitais');

    });
};


// Editar hospitais

exports.update = (req, res) => {

    var id = req.params.id;
    var { nome, cnpj, endereco, numero, cep, complemento, bairro, cidade, uf } = req.body;

    Hospital.update({

        nome, cnpj, endereco, numero, cep, complemento, bairro, cidade, uf

    }, {

        where: {

            id: id
        }

    }).then(() => {

        res.status("200").send("Hospital editado com sucesso");

    }).catch(error => {

        res.status(400).send("Erro ao editar hospital " + error)

    })
};

// Deletar hospitais

exports.delete = (req, res, next) => {

    var id = req.body.id;

    if (id != undefined) {

        if (!isNaN(id)) {

            Hospital.destroy({

                where: {
                    id: id
                }
            }).then(() => {

                res.status(200);
                res.send("Hospital removido com sucesso.")
            });

        } else {

            res.status(400);
        }

    } else {

        res.status(400);
    }
};





