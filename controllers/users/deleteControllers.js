const { removeUser, removeNotification } = require('../../entities/users/handlers/delete');

exports.removeUser = (req, res) => removeUser(req)
	.then(response => {
		let MSG = 'user removed successfully';
		if (response.n === 0) {
			MSG = 'cannot remove user, user doesnot exist!';
		}
		res.send(MSG);
	}).catch(err => {
		console.error(err.message);
		res.status(404).send('Please recheck the provided user correct ID!');
	});

exports.removeNotification = (req, res) => removeNotification(req)
	.then(response => {
		let MSG = 'notification removed successfully';
		if (response.n > 0 && response.nModified === 0) {
			MSG = 'cannot remove notification, notification doesnot exist!';
		} else if (response.n === 0 && response.nModified === 0) {
			MSG = 'cannot remove notification, user doesnot exist!';
		} else {
			res.send(MSG);
		}
		res.send(MSG);
	}).catch(err => {
		console.error(err.message);
		res.status(404).send('Please recheck the provided user correct ID!');
	});
