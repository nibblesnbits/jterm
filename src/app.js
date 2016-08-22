"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const helpers = require('./helpers');
const logger = helpers.getLogger();
const path = require('path');

const webCliRoute = require('./routes/webcli');

const app = express();


// routes
app.use('/webcli', webCliRoute);

// app capabilities
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'public')));

// error handlers
app.use((err, req, res, _next) => {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    });
});

process.on('uncaughtException', (err) => {
    // handle the error safely
    logger.error(err, "uncaughtException");
});

module.exports = app;