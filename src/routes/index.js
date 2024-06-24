const { Router } = require('express');

const EventsRoutes = require('./EventsRoutes');

const routes = Router();

routes.use('/events', EventsRoutes);

module.exports = routes;