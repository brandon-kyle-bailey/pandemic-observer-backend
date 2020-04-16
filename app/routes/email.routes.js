module.exports = (app) => {
    const emails = require('../controllers/email.controller.js');

    app.post('/emails', emails.create);

    app.get('/emails', emails.findAll);

    app.get('/emails/:emailId', emails.findOne);

    app.put('/emails/:emailId', emails.update);

    app.delete('/emails/:emailId', emails.delete);
}
