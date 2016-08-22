"use strict";

const process = require('process');
const Logger = require('./services/logging');

function getConfig() {
    if (typeof process.env.NODE_ENV === "undefined"){
        throw new Error("NODE_ENV is undefined.  Set NODE_ENV before executing");
    }
    return require(`../config.${process.env.NODE_ENV}.json`);
}

module.exports = {
    getConfig: () => getConfig(),
    getLogger: (name) => new Logger(getConfig().logging, name),
    series: (tasks) => tasks.reduce((cur, next) => cur.then(next), Promise.resolve())
};