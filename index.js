const express = require('express');

const app = express();


app.get('/', (request, response) => {
    response.json({"message": "Welcome to the Pandemic Observer."});
});


app.listen(8080, () => {
    console.log("Server listening on port 8080");
});
