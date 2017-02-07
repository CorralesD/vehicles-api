const express = require('express');
const bodyParser = require('body-parser');
const vehiclesRoute = require('./routes/vehicles');

const app = express();

app.use(bodyParser.json());
app.use(vehiclesRoute);

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});