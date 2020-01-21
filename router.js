const { Router } = require('express');
const { usersController, eventsController } = require('./controller');

const usersRouter = new Router();
const eventsRouter = new Router();

usersRouter.get('/:id', usersController.getUser);
usersRouter.get('/', usersController.getUsers);

eventsRouter.get('/:id', eventsController.getEvent);
eventsRouter.get('/', eventsController.getEvents);

module.exports = {
    usersRouter,
    eventsRouter
};
