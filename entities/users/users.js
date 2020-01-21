const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

const types = [
    'news',
    'invitation',
    'dateSelection'
]

const notification = new Schema(
    {
        event: ObjectId,
        type: [{
            type: String,
            enum: types
        }],
        receiveTime: Date
    }
);

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        profilePicture: String,
        events: [ObjectId],
        friends: [ObjectId],
        inbox: [notification]
    },
    {
        collection: 'Users'
    }
)

userSchema.path('name').validate(name => (name.length > 2) && (name.length < 25), err => console.log(err));

module.exports = mongoose.model('users', userSchema);
