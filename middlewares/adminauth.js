const jwt = require("jsonwebtoken");

const JWTSecret = "@Ty&93**$¨%@rtsh*&(NF)5$@*0";

function authentication(req, res, next) {

    const authToken = req.headers['authorization'];

    if (authentication != undefined) {

        const bearer = authToken.split(' ');
        const token = bearer[1];
        jwt.verify(token, JWTSecret, (error, data) => {

            if (error) {

                res.status(401);
                res.json({ Error: "Token inválido" });

            } else {

                req.token = token;
                req.loggedUser = { id: data.id, email: data.email };
                next();


            }
        });

    } else {

        res.status(401);
        res.json({ Error: "Token inválido!" });

    };


}

module.exports = authentication;