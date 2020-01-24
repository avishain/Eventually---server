const { addEvent, editUser } = require('../../entities/users/handlers/put');

exports.addEvent = (req, res) => addEvent(req)
	.then(user => {
		console.log(`User (${user._id}) was provided`);
		res.send(user);

	}).catch(err => {
		res.json({ message: err.message })
	}).catch(err => {
		console.error(err.message);
		res.status(404).send('Please recheck the provided ID');
	});

exports.editUser = (req, res) => editUser (req)
	.then (response => {
		console.log(`User was Updated`);
		res.send("user Updated successfully");

	}).catch (err => {
		console.error(err.message);
		res.status(404).send('Please recheck the provided ID');
	});







