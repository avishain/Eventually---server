const users = require('../users');

//---------------------------------------------------------------------------------------------

const removeUser = req => new Promise((resolve, reject) => {
	console.log('removeUser called!');
	const _id = req.params.id;

	users.deleteOne({ _id }).then(result => resolve(result)).catch(err => reject(err));
});

//---------------------------------------------------------------------------------------------

const removeNotification = req => new Promise((resolve, reject) => {
	console.log('removeNotification called!');
	const _id = req.params.id;
	const { messageID } = req.body;

	users.updateOne({ _id }, { $pull: { inbox: { _id: messageID } } }).then(result => resolve(result)).catch(err => reject(err));
});

//---------------------------------------------------------------------------------------------

module.exports = {
	removeUser,
	removeNotification
};
