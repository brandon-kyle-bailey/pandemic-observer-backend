const express = require('express');
const router = express.Router();

const summary = require('../controllers/summary.controller.js');

router.get('/all', summary.all);


module.exports = router;
