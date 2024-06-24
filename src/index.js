require("dotenv").config({path: '../.env'});

const app = require("./App");
const startDB = require("./Config/mongodb");

startDB();

app.listen(process.env.PORT, () => console.log("Servidor rodando!"));