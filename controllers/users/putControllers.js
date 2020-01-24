const { addEvent, editUser, editName, editProfilePicture, addFriend, removeFriend, removeEvent } = require('../../entities/users/handlers/put');

exports.addEvent = (req, res) => addEvent(req)
	.then(user => {
		console.log(`User (${user._id}) for add event was provided`);
		res.send(user);

	}).catch(err => {
		res.json({ message: err.message })
	}).catch(err => {
		console.error(err.message);
		res.status(404).send('Please recheck the provided ID');
	});

exports.editUser = (req, res) => editUser(req)
	.then(response => {
		console.log(`User was Updated`);
		res.send("user Updated successfully");

	}).catch(err => {
		console.error(err.message);
		res.status(404).send('Please recheck the provided ID');
	});

exports.editName = (req, res) => editName(req)
	.then(response => {
		console.log(` name was Updated`);
		res.send("user name Updated successfully");

	}).catch(err => {
		console.error(err.message);
		res.status(404).send('Please recheck the provided ID');
	});

exports.editProfilePicture = (req, res) => editProfilePicture(req)
	.then(response => {
		console.log(` ProfilePicture was Updated`);
		res.send("ProfilePicture Updated successfully");

	}).catch(err => {
		console.error(err.message);
		res.status(404).send('Please recheck the provided ID');
	});

exports.addFriend = (req, res) => addFriend(req)
	.then(response => {
		console.log(` friend added`);
		res.send("friends Updated successfully");

	}).catch(err => {
		console.error(err.message);
		res.status(404).send('Please recheck the provided user ID and friend to add must be ObjectID!');
	});

exports.removeFriend = (req, res) => removeFriend(req)
	.then(response => {
		console.log(` friend removed`);
		res.send("friend removed successfully");

	}).catch(err => {
		console.error(err.message);
		res.status(404).send('Please recheck the provided user ID and friend to remove must be ObjectID exist!');
	});

exports.removeEvent = (req, res) => removeEvent(req)
	.then(response => {
		console.log(` event removed`);
		res.send("event removed successfully");

	}).catch(err => {
		console.error(err.message);
		res.status(404).send('Please recheck the provided user ID and event to remove must be ObjectID exist!');
	});






