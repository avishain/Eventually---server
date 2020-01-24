const { getUser, getUsers } = require('./users/getControllers');
const { createUser } = require('./users/postControllers')
const { addEvent, editUser, editName, editProfilePicture, addFriend, removeFriend, removeEvent } = require('./users/putControllers')
exports.usersController = {
	// GET
	getUser,
	getUsers,
	// // POST
	createUser,
	// addNotification,
	// // PUT
	editUser,
	editProfilePicture,
	editName,
	addFriend,
	removeFriend,
	addEvent,
	removeEvent
	// // DELETE
	// removeUser,
	// removeNotification    
}
