const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

const types = [
    'Birthday',
    'Barbeque',
    'Meeting',
    'Engagement',
    'Baclor/Bachlorette',
    'Graduation',
    'Anniversary',
    'Baby shower',
    'Party'
]

const message = new Schema(
    {
        text: String,
        time: Date,
        writer: ObjectId
    }
);

const image = new Schema(
    {
        url: String,
        time: Date,
        uploader: ObjectId
    }
);

const suggestion = new Schema(
    {
        user: ObjectId,
        availableDates: [Date],
        maybeDates: [Date],
        extraWeight: Boolean
    }
)

const timeSelection = new Schema(
    {
        expiry: Date,
        dates: [Date],
        suggestions: [suggestion]
    }
)

const eventSchema = new Schema(
    {
        name: { type: String, required: true },
        admin: ObjectId,
        profileImage: String,
        time: Date,
        type: [{ type: String, enum: types }],
        Messages: [message],
        Images: [image],
        participants: [ObjectId],
        timeSelection: timeSelection
    },
    {
        collection: 'Events'
    }
)

// userSchema.path('name').validate(name => (name.length > 2) && (name.length < 25), err => console.log(err));

module.exports = mongoose.model('events', eventSchema);
