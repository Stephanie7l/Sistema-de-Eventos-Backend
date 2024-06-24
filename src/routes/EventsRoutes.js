const { Router } = require("express");
const EventsController = require("../Controllers/EventsController");
const EventsValidator = require("../Validators/EventsValidator");

const Eventsroutes = Router();

Eventsroutes.post('/', EventsValidator.create, EventsController.create);
Eventsroutes.get('/', EventsController.read);
Eventsroutes.delete('/:id', EventsValidator.destroy, EventsController.delete);
Eventsroutes.put('/:id', EventsValidator.update, EventsController.update);

module.exports = Eventsroutes;