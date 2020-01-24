const { editEvent, editName, editTime, editType, editSuggestion, addParticipant, removeParticipant } = require('../../entities/events/handlers/put');

//---------------------------------------------------------------------------------------------

exports.editEvent = (req, res) => editEvent(req)
    .then(response => {
        console.log('Event edit successfully', response);
        res.send('Event edit successfully');
    })
    .catch(err => {
        console.error(`Event edit failed: ${err}`);
        res.status(404).send('Event edit failed');
    })

//---------------------------------------------------------------------------------------------

exports.editName = (req, res) => editName(req)
    .then(response => {
        console.log('Event name edit successfully', response);
        res.send("Event's name changed successfully");
    })
    .catch(err => {
        console.error(`Event edit failed: ${err}`);
        res.status(404).send("Event's name edit failed");
    })

//---------------------------------------------------------------------------------------------

exports.editTime = (req, res) => editTime(req)
    .then(response => {
        console.log('Event time edit successfully', response);
        res.send("Event's time changed successfully");
    })
    .catch(err => {
        console.error(`Event edit failed: ${err}`);
        res.status(404).send("Event's time edit failed");
    })

//---------------------------------------------------------------------------------------------

exports.editType = (req, res) => editType(req)
    .then(response => {
        console.log('Event type edit successfully', response);
        res.send("Event's type changed successfully");
    })
    .catch(err => {
        console.error(`Event type failed. ${err}`);
        res.status(404).send(`Event type failed. ${err}`);
    })

//---------------------------------------------------------------------------------------------

exports.editSuggestion = (req, res) => editSuggestion(req)
    .then(response => {
        console.log('Event suggestion edit successfully', response);
        res.send("Event's suggestion changed successfully");
    })
    .catch(err => {
        console.error(`Event suggestion failed. ${err}`);
        res.status(404).send(`Event suggestion failed. ${err}`);
    })

//---------------------------------------------------------------------------------------------

exports.addParticipant = (req, res) => addParticipant(req)
    .then(response => {
        console.log('Participant added successfully', response);
        res.send("Participant added successfully");
    })
    .catch(err => {
        console.error(`Participant addition failed. ${err}`);
        res.status(404).send(`Participant addition failed. ${err}`);
    })

//---------------------------------------------------------------------------------------------

exports.removeParticipant = (req, res) => removeParticipant(req)
    .then(response => {
        console.log('Participant removed successfully', response);
        res.send("Participant removed  successfully");
    })
    .catch(err => {
        console.error(`Participant removal  failed. ${err}`);
        res.status(404).send(`Participant removal  failed. ${err}`);
    })

//---------------------------------------------------------------------------------------------

