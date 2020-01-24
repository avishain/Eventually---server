const Event = require('../events');
const { getIndex } = require('./helpers');

//------------------------------------------------------------------------------------------

const removeEvent = _id => new Promise((resolve, reject) => {
    Event.deleteOne({ _id }).then(coach => resolve(coach)).catch(err => reject(err));
});

//------------------------------------------------------------------------------------------

const removeImage = params => new Promise((resolve, reject) => {
    const { eventId, imageId } = params;

    Event.findOne({ _id: eventId })
        .then(event => {
            const { Images } = event;
            console.log(getIndex(Images, imageId));
            Images.splice(getIndex(Images, imageId), 1);
            Event.updateOne({ _id: eventId }, { Images })
                .then(result => resolve(result))
                .catch(err => console.log(err));
        })
        .catch(err => reject("Problem in finding the event: " + err));
});

//------------------------------------------------------------------------------------------

const removeMessage = params => new Promise((resolve, reject) => {
    const { eventId, messageId } = params;

    Event.findOne({ _id: eventId })
        .then(event => {
            const { Messages } = event;
            Messages.splice(getIndex(Messages, messageId), 1);
            Event.updateOne({ _id: eventId }, { Messages })
                .then(result => resolve(result))
                .catch(err => console.log(err));
        })
        .catch(err => reject("Problem in finding the event: " + err));
});

//------------------------------------------------------------------------------------------

module.exports = {
    removeEvent,
    removeImage,
    removeMessage
}
