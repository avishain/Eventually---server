const users = require('../users');
const getUser = _id => new Promise((resolve, reject) => {
	users.findOne({ _id }).then(user => resolve(user)).catch(err => reject(err));
});

const getUsers = ids => new Promise((resolve, reject) => {
	users.find().where('_id').in(ids)
		.then(retreivedUsers => resolve(retreivedUsers))
		.catch(err => reject(err));
});

module.exports = {
	getUser,
	getUsers
};
