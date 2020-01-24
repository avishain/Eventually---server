const { Router } = require('express');
const { usersController, eventsController } = require('./controller');

const usersRouter = new Router();
const eventsRouter = new Router();

usersRouter.get('/:id', usersController.getUser);
usersRouter.get('/', usersController.getUsers);

usersRouter.post('/createUser',usersController.createUser); //change to '/'
usersRouter.post('/addNotification/:id',usersController.addNotification);

usersRouter.put('/event/:id', usersController.addEvent );
usersRouter.put('/editUser/:id', usersController.editUser );
usersRouter.put ('/editName/:id',usersController.editName);
usersRouter.put ('/editProfilePicture/:id',usersController.editProfilePicture);
usersRouter.put ('/addFriend/:id',usersController.addFriend);
usersRouter.put ('/removeFriend/:id',usersController.removeFriend);
usersRouter.put ('/removeEvent/:id',usersController.removeEvent);
usersRouter.delete ('/removeUser/:id',usersController.removeUser);
usersRouter.delete ('/removeNotification/:id',usersController.removeNotification);

eventsRouter.get('/:id', eventsController.getEvent);
eventsRouter.get('/', eventsController.getEvents);
eventsRouter.post('/', eventsController.createEvent);
eventsRouter.post('/image/:id', eventsController.addImage);
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
