const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Successfully connected to the database.");
    }).catch(err => {
        console.log("Could not connect to the database. Exiting...", err);
        process.exit();
    });

app.get('/', (request, response) => {
    response.json({"message": "Welcome to the Pandemic Observer."});
});

require('./app/routes/email.routes.js')(app);

app.listen(8080, () => {
    console.log("Server listening on port 8080");
});
