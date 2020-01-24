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
    return new Promise((resolve, reject) => {
        const { id } = req.params;
        const { image } = req.body;

        Event.findOne({ _id: id })
            .then(event => {
                const { Images } = event;
                Images.push(image);
                Event.updateOne({ _id: id }, { Images }).then(result => resolve(result)).catch(err => console.log(err));
            })
            .catch(err => reject("problem adding the image: " + err));
    })
};

const addMessage = req => {
    return new Promise((resolve, reject) => {
        const _id = req.params.eventID;

        Event.findOne({ _id })
            .then(event => {
                const { Messages } = event;
                Messages.push(req.body);
                Event.updateOne({ _id }, { Messages }).then(result => resolve(result)).catch(err => console.log(err));
            })
            .catch(err => reject("problem adding the message: " + err));
    })
};

module.exports = {
    createEvent,
    addImage,
    addMessage
}
