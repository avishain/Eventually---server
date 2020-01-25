const users = require('../users');

//---------------------------------------------------------------------------------------------

const createUser = userParams => new Promise((resolve, reject) => {
    console.log('createUser called!');
    const { name = 'noname', profileImage = 'http://dummyimage.com/183x104.bmp/cc0000/ffffff', events = [], friends = [], inbox = [] } = userParams;


    const newUser = new users({ name, profileImage, events, friends, inbox });
    newUser.save().then(result => resolve(result)).catch(err => reject(err));
});

//---------------------------------------------------------------------------------------------

const addNotification = userParams => new Promise((resolve, reject) => {
    console.log('addNotification called!');
    const { id } = userParams.params;
    const { types = null, event = null } = userParams.body;
    const options = { runValidators: true };

    users.updateOne({ _id: id }, { $push: { inbox: { type: types, event } } }, options)
        .then(result => resolve(result))
        .catch(err => reject(err));
});

//---------------------------------------------------------------------------------------------

module.exports = {
    createUser,
    addNotification
};
