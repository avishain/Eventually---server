const { createUser, addNotification } = require('../../entities/users/handlers/post');

//---------------------------------------------------------------------------------------------

exports.createUser = (req, res) => createUser(req.body)
	.then(user => {
		console.log(`User (${user._id}) was provided`);
		res.send(user);
	}).catch(err => {
		res.json({ message: err.message });
	}).catch(err => {
		console.error(err.message);
		res.status(404).send('Please recheck the provided ID');
	});

//---------------------------------------------------------------------------------------------

exports.addNotification = (req, res) => addNotification(req)
	.then(notification => {
		if (notification.n === 0) {
			res.status(404).send('cannot find User to add notification!');
		} else {
			res.send('notification added successfully');
		}
	}).catch(err => {
		res.status(404).send(`add notification failed. ${err}`);
	}).catch(err => {
		console.error(err.message);
		res.status(404).send('Please recheck the provided ID');
	});

//---------------------------------------------------------------------------------------------
