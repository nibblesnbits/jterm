"use strict";

const bunyan = require("bunyan");
const bformat = require("bunyan-format");
const path = require("path");
const fs = require("fs");

const formatOut = bformat({ outputMode: "short" });

function Logger(config, name) {

    const streams = [];
    
    if (config.file.enabled) {
        streams.push({
            level: config.file.level,
            type: "rotating-file",
            path: path.join(config.file.dir, config.file.fileName || "daily.log"),
            period: "1d",
            count: 7
        });
        if (!fs.existsSync(config.file.dir)) {
            fs.mkdirSync(config.file.dir);
        }
    }
    
    if (config.console.enabled) {
        streams.push({
            level: config.console.level || "trace",
            stream: formatOut
        });
    }
    
    return bunyan.createLogger({
        name: name || config.name,
        streams: streams
    });
}

module.exports = Logger;