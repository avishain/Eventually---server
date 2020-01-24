const users = require('../users');

const addEvent = userParams => new Promise((resolve, reject) => {
	console.log('addEvent called!');
	const { id } = userParams.params;
	const { eventId = null } = userParams.body;
	users.updateOne({ _id: id }, { $push: { events: eventId } })
		.then(result => resolve(result))
		.catch(err => reject(err));

});
// let the user change the name and appends all other values to current arrays (events,friends,inbox)

const editUser = userParams => new Promise((resolve, reject) => {
	console.log('editUser called');
	const { id } = userParams.params;
	const { events = [], friends = [], name = null, inbox = [] } = userParams.body;
	users.updateOne({ _id: id }, { name, $push: { events, friends, inbox } })
		.then(result => resolve(result))
		.catch(err => reject(err));

});

const editName = userParams => new Promise((resolve, reject) => {
	console.log('editName called!');
	const _id = userParams.params.id;
	const { name } = userParams.body;
	if (name == null || name == '') {
		reject('you must provide name!');
	}
	users.updateOne({ _id }, { name }).then(result => resolve(result)).catch(err => reject(err));
});

const editProfilePicture = req => new Promise((resolve, reject) => {
	console.log('editProfilePicture called!');
	const _id = req.params.id;
	profileImage = req.body.image;
	users.updateOne({ _id }, { profileImage }).then(result => resolve(result)).catch(err => reject(err));
});

const addFriend = req => new Promise((resolve, reject) => {
	console.log('addFriend called!');
	const _id = req.params.id;
	const { friend } = req.body;
	users.updateOne({ _id }, { $push: { friends: friend } })
		.then(result => resolve(result))
		.catch(err => reject(err));
});

const removeFriend = req => new Promise((resolve, reject) => {
	console.log('removeFriend called!');
	const _id = req.params.id;
	const { friend } = req.body;
	users.updateOne({ _id }, { $pull: { friends: friend } })
		.then(result => resolve(result))
		.catch(err => reject(err));
});

const removeEvent = req => new Promise((resolve, reject) => {
	console.log('removeEvent called!');
	const _id = req.params.id;
	const { event } = req.body;
	users.updateOne({ _id }, { $pull: { events: event } })
		.then(result => resolve(result))
		.catch(err => reject(err));
});

module.exports = {
	addEvent,
	editUser,
	editName,
	editProfilePicture,
	addFriend,
	removeFriend,
	removeEvent
}