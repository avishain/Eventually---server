const users = require('../users');

const createUser = userParams => new Promise((resolve, reject) => {
	console.log('createUser called!');
	const { name, profileImage = "http://dummyimage.com/183x104.bmp/cc0000/ffffff", events = [], friends = [], inbox = [] } = userParams;
	// if (name == null) {
	// 	reject('name is required');
	// }
	let newUser = new users( { name, profileImage, events, friends, inbox })
	newUser.save().then( result => resolve(result)).catch(err =>reject(err))
	

    
});

module.exports = {
	createUser
}