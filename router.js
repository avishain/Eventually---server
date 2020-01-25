const { Router } = require('express');
const { usersController, eventsController } = require('./controller');

const usersRouter = new Router();
const eventsRouter = new Router();

// USERS
usersRouter.get('/:id', usersController.getUser);
usersRouter.get('/', usersController.getUsers);
usersRouter.post('/', usersController.createUser);
usersRouter.post('/notifications/:id', usersController.addNotification);
usersRouter.put('/event/:id', usersController.addEvent);
usersRouter.put('/:id', usersController.editUser);
usersRouter.put('/name/:id', usersController.editName);
usersRouter.put('/profileImage/:id', usersController.editProfilePicture);
usersRouter.put('/friends/add/:id', usersController.addFriend);
usersRouter.put('/friend/remove/:id', usersController.removeFriend);
usersRouter.put('/events/remove/:id', usersController.removeEvent);
usersRouter.delete('/:id', usersController.removeUser);
usersRouter.delete('/notifications/:id', usersController.removeNotification);

// EVENTS
eventsRouter.get('/:id', eventsController.getEvent);
eventsRouter.get('/', eventsController.getEvents);
eventsRouter.post('/', eventsController.createEvent);
eventsRouter.post('/image/:eventID', eventsController.addImage);
eventsRouter.post('/message/:eventID', eventsController.addMessage);
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
