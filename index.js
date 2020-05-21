const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");


// Routes
const pacientesRouter = require("./routes/pacientesRoutes");

//Controllers
const usersController = require("./controllers/usersController");
const pacientesController = require("./controllers/pacientesController");

//Models
const Paciente = require("./models/Paciente");
const User = require("./models/User");

const session = require("express-session");

const cors = require("cors");
app.use(cors());

// View engine

app.set('view engine', 'ejs');
app.locals.moment = require('moment');

// Using Sessions

//Body parser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Using Routes

app.use("/",pacientesRouter);

// Database Authentication

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    }).catch((error) => {
        console.log(error);
    })

app.listen(3000, () => {
    console.log("O servidor está rodando!")
});