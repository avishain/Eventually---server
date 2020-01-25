const { addEvent, editUser, editName, editProfilePicture, addFriend, removeFriend, removeEvent } = require('../../entities/users/handlers/put');

//---------------------------------------------------------------------------------------------

exports.addEvent = (req, res) => addEvent(req)
	.then(() => {
		console.error('Event added Succefully');
		res.send('Event added Succefully');
	}).catch(err => {
		console.error(err.message);
		res.status(404).send('Please recheck the provided ID');
	});

//---------------------------------------------------------------------------------------------

exports.editUser = (req, res) => editUser(req)
	.then(response => {
		res.send('User updated successfully');
	}).catch(err => {
		console.error(err.message);
		res.status(404).send('Please recheck the provided ID');
	});

//---------------------------------------------------------------------------------------------

exports.editName = (req, res) => editName(req)
	.then(response => {
		res.send('user name Updated successfully');
	}).catch(err => {
		console.error(err.message);
		res.status(404).send('Please recheck the provided ID and name ' + err.message);
	});

//---------------------------------------------------------------------------------------------

exports.editProfilePicture = (req, res) => editProfilePicture(req)
	.then(response => {
		if (response.n === 0) {
			res.status(404).send('cannot find user!');
		}
		res.send('Profile picture updated successfully');
	}).catch(err => {
		console.error(err.message);
		res.status(404).send('Please recheck the provided ID and new picture');
	});

//---------------------------------------------------------------------------------------------

exports.addFriend = (req, res) => addFriend(req)
	.then(response => {
		res.send('friends Updated successfully');
	}).catch(err => {
		console.error(err.message);
		res.status(404).send('Please recheck the provided user ID and friend to add must be ObjectID!');
	});

//---------------------------------------------------------------------------------------------

exports.removeFriend = (req, res) => removeFriend(req)
	.then(response => {
		res.send('friend removed successfully');
	}).catch(err => {
		console.error(err.message);
		res.status(404).send('Please recheck the provided user ID and friend to remove must be ObjectID exist!');
	});

//---------------------------------------------------------------------------------------------

exports.removeEvent = (req, res) => removeEvent(req)
	.then(response => {
		res.send('event removed successfully');
	}).catch(err => {
		console.error(err.message);
		res.status(404).send('Please recheck the provided user ID and event to remove must be ObjectID exist!');
	});

//---------------------------------------------------------------------------------------------
