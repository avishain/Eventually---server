const Express = require('express');
const { usersRouter, eventsRouter } = require('./router');

require('./db_connection');

const app = Express();
const port = process.env.PORT || 3000;

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/users', usersRouter);
app.use('/events', eventsRouter);

app.use((req, res) => {
	res.status(400).send('Invalid query');
});

app.listen(port, () => console.log('Express server is running on port ', port));
