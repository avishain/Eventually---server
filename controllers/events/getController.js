const { getEvent, getEvents } = require('../../entities/events/handlers/get');

//---------------------------------------------------------------------------------------------

exports.getEvent = (req, res) => getEvent(req.params.id)
    .then(event => {
        console.log(`Event (${event._id}) was provided`);
        res.send(event);
    })
    .catch(err => {
        console.error(err.message);
        res.status(404).send('Please recheck the provided ID');
    });

//---------------------------------------------------------------------------------------------

exports.getEvents = (req, res) => getEvents(req.query.ids)
    .then(events => {
        console.log(`${events.length} events were provided`);
        res.send(events);
    })
    .catch(err => {
        console.error(err.message);
        res.status(404).send('Please recheck the provided ID');
    });

//---------------------------------------------------------------------------------------------
