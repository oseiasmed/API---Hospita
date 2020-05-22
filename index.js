const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

// Routes
const pacientesRouter = require("./routes/pacientesRoutes");
const consultasRouter = require("./routes/consultasRouter");
const hospitaisRouter = require("./routes/hospitaisRouter");

//Cors
const cors = require("cors");
app.use(cors());

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Using Routes
app.use("/", pacientesRouter);
app.use("/", consultasRouter);
app.use("/", hospitaisRouter);


// Database Authentication
connection

    .authenticate()

    .then(() => {

        console.log("Conexão feita com sucesso!");

    }).catch((error) => {

        console.log(error);

    })

app.listen(3000, () => {

    console.log("O servidor está rodando!");

});

module.exports = app;

