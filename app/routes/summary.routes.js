const express = require('express');
const router = express.Router();

const summary = require('../controllers/summary.controller.js');

router.get('/global', summary.global);

module.exports = router;
