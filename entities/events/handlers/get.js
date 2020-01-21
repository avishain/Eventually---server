const events = require('../events');

const getEvent = _id => new Promise((resolve, reject) => {
    console.log(_id);
    events.findOne({ _id }).then(event => resolve(event)).catch(err => reject(err));
});

const getEvents = ids => new Promise((resolve, reject) => {
    events.find().where('_id').in(ids)
        .then(retreivedEvents => {
            const eventsEdited = [];

            /*  This call is relevant for showing the event cards in the main page and in the events page
                and since each event might include a lot of irrlevant data, in order to avoid sending
                unnecessary data, we decided to retreive only the relevant data */ 
            retreivedEvents.forEach(event => {
                const { _id, name, time, profileImage, Images, Messages, participants } = event;
                eventsEdited.push({ _id, name, time, profileImage, imagesAmount: Images.length, MessagesAmount: Messages.length, participantsAmount: participants.length })
            })

            resolve(eventsEdited)
        })
        .catch(err => reject(err));
})

module.exports = {
    getEvent,
    getEvents
}
