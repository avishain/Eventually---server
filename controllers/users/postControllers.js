const { createUser } = require('../../entities/users/handlers/post');

exports.createUser = (req, res) => createUser(req.body)
	.then(user => {
		console.log(`User (${user._id}) was provided`);
		res.send(user);

	}).catch(err => {
		res.json({ message: err.message })
	}) .catch(err => {
		console.error(err.message);
		res.status(404).send('Please recheck the provided ID');
	});

