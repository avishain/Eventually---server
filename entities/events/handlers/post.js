const Event = require('../events');
const { validateParams, setEventformat, containsAllRequired } = require('./helpers');

const createEvent = newEventParams => new Promise((resolve, reject) => {
    let validationCheck = validateParams(newEventParams);
    validationCheck = validationCheck === true ? containsAllRequired(newEventParams) : validationCheck;

    if (validationCheck !== true) {
        reject(validationCheck);
        return;
    }

    let newEvent = new Event(setEventformat(newEventParams));
    newEvent.save().then(result => resolve(result)).catch(err => reject(err));
});

const addImage = req => {
    const _id = req.params.eventID;
    return new Promise((resolve, reject) => {
        Event.updateOne({ _id }, { $push: { Images: req.body } }).then(result => resolve(result)).catch(err => reject(err));
    })
};

const addMessage = req => {
    const _id = req.params.eventID;
    return new Promise((resolve, reject) => {
        Event.updateOne({ _id }, { $push: { Messages: req.body } }).then(result => resolve(result)).catch(err => reject(err));
    })
};

module.exports = {
    createEvent,
    addImage,
    addMessage
}
