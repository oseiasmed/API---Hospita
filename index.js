const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const pacientesController = require("./controllers/pacientesController");

const Paciente = require("./models/Paciente");

const session = require("express-session");

const cors = require("cors");
app.use(cors());

// View engine

app.set('view engine', 'ejs');
app.locals.moment = require('moment');

// Using Sessions

app.use(session({

    secret:"secrethospitalnode",cookie:{maxAge:300000000}
}))
// Using Static Files 

app.use(express.static('public'));

//Body parser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database Authentication

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    }).catch((error) => {
        console.log(error);
    })


app.use("/", pacientesController);


app.listen(3000, () => {
    console.log("O servidor está rodando!")
})