const users = require('../users');

const createUser = userParams => new Promise((resolve, reject) => {
	console.log('createUser called!');
	console.log('params', userParams);
	const { name = 'noname', profileImage = 'http://dummyimage.com/183x104.bmp/cc0000/ffffff', events = [], friends = [], inbox = [] } = userParams;
	console.log('name', name);
	// eslint-disable-next-line new-cap
	const newUser = new users({ name, profileImage, events, friends, inbox });
	newUser.save().then(result => resolve(result)).catch(err => reject(err));
});

const addNotification = userParams => new Promise((resolve, reject) => {
	console.log('addNotification called!');
	const { id } = userParams.params;
	const { types = null, event = null } = userParams.body;
	users.updateOne({ _id: id }, { $push: { inbox: { type: types, event } } })
		.then(result => resolve(result))
		.catch(err => reject(err));
});

module.exports = {
	createUser,
	addNotification
};
