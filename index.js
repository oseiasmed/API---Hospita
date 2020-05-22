const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");


// Routes
const pacientesRouter = require("./routes/pacientesRoutes");
//const consultasRouter = require("./routes/consultasRouter");
const hospitaisRouter = require("./routes/hospitaisRouter");

// //Controllers
// const usersController = require("./controllers/usersController");
// const pacientesController = require("./controllers/pacientesController");
// const ConsultasController = require("./controllers/ConsultasController");
// const HospitaisController = require("./controllers/HospitaisController");


// //Models
// const Paciente = require("./models/Paciente");
// const User = require("./models/User");
// const Consulta = require("./models/Consulta");
// const Hospital = require("./models/Hospital");

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

app.use("/", pacientesRouter);
//app.use("/", consultasRouter);
app.use("/", hospitaisRouter);


// app.use("/",ConsultasController);
// app.use("/",pacientesController);
// app.use("/",usersController);
// app.use("/",HospitaisController);


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