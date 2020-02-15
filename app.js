// Require modules
const express = require('express');

// Create the Express app
const app = express();

// Configure the app (app.set)
app.get('/', (req, res) => res.send('Hello Worldd!'))
app.get('/login', (req, res) => res.send('Login'))


// Mount middleware (app.use)


// Mount routes


// Tell the app to listen on port 3000
app.listen(3000, function () {
	console.log('Listening on port 3000');
});