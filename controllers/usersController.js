const { getUser, getUsers } = require('./users/getControllers');
const { createUser } = require('./users/postControllers')
const { addEvent, editUser } = require('./users/putControllers')
exports.usersController = {
	// GET
	getUser,
	getUsers,
	// // POST
	createUser,
	// addNotification,
	// // PUT
	editUser,
	// editProfilePicture,
	// editName,
	// addFriend,
	// removeFriend,
	addEvent
	// RemoveEvent,
	// // DELETE
	// removeUser,
	// removeNotification    
}
