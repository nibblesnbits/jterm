"use strict";

const express = require('express');
const router = express.Router();

// const helpers = require("./helpers");
// const config = helpers.getConfig();

router.get('/', (req, res) => {
    res.status(200).json({});
});

module.exports = router;
