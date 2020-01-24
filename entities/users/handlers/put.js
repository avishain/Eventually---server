const users = require('../users');

const addEvent = userParams => new Promise((resolve, reject) => {
	console.log('addEvent called!');
	const { id } = userParams.params;
	const { eventId = null } = userParams.body;
	users.updateOne({ _id: id }, { $push: { events: eventId } })
		.then(result => resolve(result))
		.catch(err => reject(err));

});

const editUser = userParams => new Promise((resolve, reject) => {
	console.log('editUser called');
	const { id } = userParams.params;
	const { events = [], friends = [], name = null, inbox = [] } = userParams.body;
	console.log(`need to update  id ${id} event: ${events}, friends ${friends}, name: ${name}, inbox ${inbox}`);
	//validation
	users.updateOne({ _id: id }, { $set: { events, friends, name, inbox } })
		.then(result => resolve(result))
		.catch(err => reject(err));

})

module.exports = {
	addEvent,
	editUser
}