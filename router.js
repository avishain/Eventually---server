const { Router } = require('express');
const { usersController, eventsController } = require('./controller');

const usersRouter = new Router();
const eventsRouter = new Router();

usersRouter.get('/:id', usersController.getUser);
usersRouter.get('/', usersController.getUsers);

usersRouter.post('/createUser',usersController.createUser); //change to '/'

usersRouter.put('/addEvent', usersController.addEvent );
usersRouter.put('/editUser/:id', usersController.editUser )


eventsRouter.get('/:id', eventsController.getEvent);
eventsRouter.get('/', eventsController.getEvents);
eventsRouter.post('/', eventsController.createEvent);
eventsRouter.post('/image/:id', eventsController.addImage);
eventsRouter.post('/message/:id', eventsController.addMessage);
eventsRouter.delete('/:id', eventsController.removeEvent);
eventsRouter.delete('/images/:eventId/:imageId', eventsController.removeImage);
eventsRouter.delete('/messages/:eventId/:messageId', eventsController.removeMessage);
eventsRouter.put('/:id', eventsController.editEvent);
eventsRouter.put('/name/:id', eventsController.editName);
eventsRouter.put('/time/:id', eventsController.editTime);
eventsRouter.put('/type/:id', eventsController.editType);
eventsRouter.put('/suggestion/:eventId/:suggestionId', eventsController.editSuggestion);
eventsRouter.put('/addParticipant/:eventId', eventsController.addParticipant);
eventsRouter.put('/removeParticipant/:eventId', eventsController.removeParticipant);

module.exports = {
    usersRouter,
    eventsRouter
};
