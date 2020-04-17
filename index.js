require('dotenv').config();
const express = require('express');

const app = express();

const summary = require('./app/routes/summary.routes.js');

app.use('/summary', summary);

app.get('/', (request, response) => {
    response.json({"message": "Welcome to the Pandemic Observer."});
});


app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Server listening at http://${process.env.HOST}:${process.env.PORT}`);
});
