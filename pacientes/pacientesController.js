const express = require("express");
const router = express.Router();
const Paciente = require("./Paciente");

// List Patients  

router.get("/pacientes", (req, res, next) => {

    Paciente.findAll().then(pacientes => {

        res.status(200).send(pacientes);

    }).catch(error => {

        res.status(400).send({

            message: 'Falha ao listar os pacientes.',
            data: error
        });

    });

});

// Save Patients  

router.post("/pacientes", (req, res, next) => {
    var nome = req.body.nome;
    var cpf = req.body.cpf;
    var endereco = req.body.endereco;
    var numero = req.body.numero;
    var dtnascimento = req.body.dtnascimento;
    var complemento = req.body.complemento;
    var bairro = req.body.bairro;
    var cidade = req.body.cidade;
    var uf = req.body.uf;

    Paciente.create({
        nome: nome,
        cpf: cpf,
        endereco: endereco,
        numero: numero,
        dtnascimento: dtnascimento,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        uf: uf

    }).then(() => {

        res.status(200).send(pacientes);

    }).catch(error => {

        res.status(400).send({

            message: 'Falha ao slavar o paciente.',
            data: error
        });
    });
});


router.delete("/pacientes", (req, res) => {
    
    var id = req.body.id;

    if (id != undefined) {

        if (!isNaN(id)) {

            Paciente.destroy({

                where: {
                    id: id
                }

            }).then(() => {

                res.status(200).send("Paciente deletado com sucesso");
            });

        } else {

            res.send("Erro ao deletar o paciente");
        }

    } else {
        res.send("Erro ao deletar o paciente");
    }
});


module.exports = router;