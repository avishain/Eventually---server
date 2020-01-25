const users = require('../users');

//---------------------------------------------------------------------------------------------

const removeUser = _id => new Promise((resolve, reject) => {
	console.log('removeUser called!');
	users.deleteOne({ _id }).then(result => resolve(result)).catch(err => reject(err));
});

//---------------------------------------------------------------------------------------------

const removeNotification = req => new Promise((resolve, reject) => {
	console.log('removeNotification called!');
	const _id = req.params.id;
	const { notificationID } = req.body;

	users.updateOne({ _id }, { $pull: { inbox: { _id: notificationID } } }).then(result => resolve(result)).catch(err => reject(err));
});

//---------------------------------------------------------------------------------------------

module.exports = {
	removeUser,
	removeNotification
};
