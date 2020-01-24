const Event = require('../events');
const { validateParams, typeTypes, getIndex } = require('./helpers');

//---------------------------------------------------------------------------------------------

const editEvent = req => {
    const _id = req.params.id;
    const updates = req.body;
    const validationCheck = validateParams(updates);

    return new Promise((resolve, reject) => {
        if (validationCheck === true) {
            Event.updateOne({ _id }, { ...updates }).then(result => resolve(result)).catch(err => reject(err));
        } else {
            reject(validationCheck);
        }
    })
};

//---------------------------------------------------------------------------------------------

const editName = req => {
    const _id = req.params.id;
    const { name } = req.body;
    const validationCheck = validateParams({ name });

    return new Promise((resolve, reject) => {
        if (validationCheck === true) {
            Event.updateOne({ _id }, { name }).then(result => resolve(result)).catch(err => reject(err));
        } else {
            reject(validationCheck);
        }
    })
};

//---------------------------------------------------------------------------------------------

const editTime = req => {
    const _id = req.params.id;
    const { time } = req.body;

    return new Promise((resolve, reject) => {
        Event.updateOne({ _id }, { time }).then(result => resolve(result)).catch(err => reject(err));
    })
};

//---------------------------------------------------------------------------------------------

const editType = req => {
    const _id = req.params.id;
    const { type } = req.body;

    return new Promise((resolve, reject) => {
        if (typeTypes.includes(type)) {
            Event.updateOne({ _id }, { type }).then(result => resolve(result)).catch(err => reject(err));
        } else {
            reject("Invalid type. Please recheck the type and make sure it value is one of the possible values");
        }
    })
};

//---------------------------------------------------------------------------------------------

const editSuggestion = req => {
    const { eventId, suggestionId } = req.params;

    return new Promise((resolve, reject) => {
        Event.findOne({ _id: eventId })
            .then(event => {
                const timeSelection = event.timeSelection;
                const suggestions = timeSelection.suggestions;

                const suggestionIndex = getIndex(suggestions, suggestionId);
                suggestions[suggestionIndex] = req.body;
                timeSelection.suggestions = suggestions;

                Event.updateOne({ _id: eventId }, { timeSelection }).then(result => resolve(result)).catch(err => reject(`Failed to find event ID: ${err}`));
            })
            .catch(err => reject(`Failed to find event ID: ${err}`));
    })
};

//---------------------------------------------------------------------------------------------

const addParticipant = req => {
    const _id = req.params.eventId;
    const { userId } = req.body;
    
    return new Promise((resolve, reject) => {
        Event.updateOne({ _id }, { $push: { participants: userId } }).then(result => resolve(result)).catch(err => reject(err));
    })
};

//---------------------------------------------------------------------------------------------

const removeParticipant = req => {
    const _id = req.params.eventId;
    const { userId } = req.body;

    return new Promise((resolve, reject) => {
        Event.updateOne({ _id }, { $pull: { participants: userId } }).then(result => resolve(result)).catch(err => reject(err));
    })
};

//---------------------------------------------------------------------------------------------


module.exports = {
    editEvent,
    editName,
    editTime,
    editType,
    editSuggestion,
    addParticipant,
    removeParticipant
}
