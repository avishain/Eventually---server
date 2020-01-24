const { createEvent, addImage, addMessage } = require('../../entities/events/handlers/post');

exports.createEvent = (req, res) => createEvent(req.body)
    .then(event => {
        console.log(`Event added successfully. Event's ID: ${event._id}`);
        res.send(event._id);
    })
    .catch(err => {
        console.error(err);
        res.status(404).send('Event addition failed: ' + err);
    })

exports.addImage = (req, res) => addImage(req)
    .then(result => {
        console.log(`Image added successfully: ${JSON.stringify(result)}`);
        res.send('Image added successfully');
    })
    .catch(err => {
        console.error(err);
        res.status(404).send('Image addition failed: ' + err);
    })

exports.addMessage = (req, res) => addMessage(req)
    .then(result => {
        console.log(`Message added successfully: ${JSON.stringify(result)}`);
        res.send('Message added successfully');
    })
    .catch(err => {
        console.error(err);
        res.status(404).send('Image addition failed: ' + err);
    })
