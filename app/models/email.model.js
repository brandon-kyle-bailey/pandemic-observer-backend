const mongoose = require('mongoose');

const EmailSchema = mongoose.Schema({
    address: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Email', EmailSchema);

