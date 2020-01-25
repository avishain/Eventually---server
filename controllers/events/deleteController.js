const { removeEvent, removeImage, removeMessage } = require('../../entities/events/handlers/delete');

//---------------------------------------------------------------------------------------------

exports.removeEvent = (req, res) => removeEvent(req.params.id)
    .then(() => {
        console.log(`Event ${req.params.id} removed successfully`);
        res.send(`Event ${req.params.id} removed successfully`);
    })
    .catch(err => {
        console.error(err);
        res.status(404).send('Event removal failed');
    })

//---------------------------------------------------------------------------------------------

exports.removeImage = (req, res) => removeImage(req.params)
    .then(() => {
        console.log(`Image ${req.params.imageId} removed successfully`);
        res.send(`Image ${req.params.imageId} removed successfully`);
    })
    .catch(err => {
        console.error(err);
        res.status(404).send('Image removal failed');
    })

//---------------------------------------------------------------------------------------------

exports.removeMessage = (req, res) => removeMessage(req.params)
    .then(() => {
        console.log(`Message ${req.params.messageId} removed successfully`);
        res.send(`Message ${req.params.messageId} removed successfully`);
    })
    .catch(err => {
        console.error(err);
        res.status(404).send('Message removal failed');
    })

//---------------------------------------------------------------------------------------------
