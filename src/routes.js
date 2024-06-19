const { Router } = require("express");
const EventsController = require("./Controllers/EventsController");
const EventsValidator = require("./Validators/EventsValidator");

const rotas = Router();

//EVENTS
rotas.post('/events', EventsValidator.create, EventsController.create);
rotas.get('/events', EventsController.read);
rotas.delete('/events/:id', EventsValidator.destroy, EventsController.delete);
rotas.put('/events/:id', EventsValidator.update, EventsController.update);

module.exports = rotas;