const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWTSecret = "@Ty&93**$¨%@rtsh*&(NF)5$@*0";

router.post("/authenticate", (req, res) => {

    var email = req.body.email;
    var password = req.body.password;

    User.findOne({ where: { email: email } }).then(user => {

        if (user != undefined) {

            var correct = bcrypt.compareSync(password, user.password);

            if (correct) {

                req.session.user = {

                    id: user.id,
                    email: user.email
                };

                jwt.sign({ id: user.id, email: user.email }, JWTSecret, { expiresIn: '24h' }, (error, token) => {

                    if (error) {

                        res.status(400);
                        res.json({ Erro: "Falha interna" });

                    } else {

                        res.status(200);
                        res.json({ token: token });

                    };
                });

            } else {

                res.status(404);
                res.json({ err: "Usuário inválido" });
            }

        } else {

            res.status(401);
            res.json({ err: "Credenciais inválidas" });
        };
    });

});

module.exports = router;