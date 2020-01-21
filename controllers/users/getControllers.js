const { getUser, getUsers } = require('../../entities/users/handlers/get');

exports.getUser = (req, res) => getUser(req.params.id)
    .then(user => {
        console.log(`User (${user._id}) was provided`);
        res.send(user);
    })
    .catch(err => {
        console.error(err.message);
        res.status(404).send('Please recheck the provided ID');
    });

exports.getUsers = (req, res) => getUsers(req.query.ids)
    .then(users => {
        console.log(`${users.length} users were provided`);
        res.send(users);
    })
    .catch(err => {
        console.error(err.message);
        res.status(404).send('Please recheck the provided ID');
    });
