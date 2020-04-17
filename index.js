require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const summary = require('./app/routes/summary.routes.js');

app.use('/summary', summary);

app.get('/', (request, response) => {
    response.json({"message": "Welcome to the Pandemic Observer."});
});


app.listen(PORT, HOST, () => {
    console.log(`Server listening at http://${HOST}:${PORT}`);
});
