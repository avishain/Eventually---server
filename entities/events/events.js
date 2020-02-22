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
        time: { type: Date, default: Date.now },
        writer: ObjectId
    }
);

const image = new Schema(
    {
        url: String,
        time: { type: Date, default: Date.now },
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
    },
    { _id: false }
)

const eventSchema = new Schema(
    {
        name: { type: String, required: true },
        admin: { type: ObjectId, required: true },
        profileImage: String,
        time: Date,
        type: { type: String, enum: types },
        Messages: [message],
        Images: [image],
        participants: [ObjectId],
        timeSelection: timeSelection,
        invitations: [ObjectId]
    },
    {
        collection: 'Events'
    }
)


exports.Event = mongoose.model('events', eventSchema);
exports.Suggestions = mongoose.model('Suggestions', suggestion);