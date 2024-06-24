const express = require("express");
const routes = require("./routes/index");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use("*", (req, res) => res.status(404).json({ message: `Rota '${req.baseUrl}' não encontrada!` }));
app.use(cors());

module.exports = app;  