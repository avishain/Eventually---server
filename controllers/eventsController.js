const { getEvent, getEvents } = require('./events/getController');
const { createEvent, addImage, addMessage } = require('./events/postController');
const { removeEvent, removeImage, removeMessage } = require('./events/deleteController');
const { editEvent, editName, editTime, editType, editSuggestion, addParticipant, removeParticipant } = require('./events/putController');

exports.eventsController = {
	// GET
	getEvent,
	getEvents,
	// POST
	createEvent,
	addImage,
	addMessage,
	// PUT
	editEvent,
	editName,
	editTime,
	editType,
	editSuggestion,
	addParticipant,
	removeParticipant,
	// DELETE
	removeEvent,
	removeImage,
	removeMessage
};
