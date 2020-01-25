const users = require('../users');

//---------------------------------------------------------------------------------------------

const createUser = userParams => new Promise((resolve, reject) => {
    console.log('createUser called!');

    if('name' in userParams === false) {
        return reject('"name" is mandatory');
    }
    const { name, profileImage = 'http://dummyimage.com/183x104.bmp/cc0000/ffffff', events = [], friends = [], inbox = [] } = userParams;

    const newUser = new users({ name, profileImage, events, friends, inbox });
    newUser.save().then(result => resolve(result)).catch(err => reject(err));
});

//---------------------------------------------------------------------------------------------

const addNotification = req => new Promise((resolve, reject) => {
    console.log('addNotification called!');
    const { id } = req.params;
    const { type = null, event = null } = req.body;
    const options = { runValidators: true };

    users.updateOne({ _id: id }, { $push: { inbox: { type, event } } }, options)
        .then(result => resolve(result))
        .catch(err => reject(err));
});

//---------------------------------------------------------------------------------------------

module.exports = {
    createUser,
    addNotification
};
