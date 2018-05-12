var merge = require("lodash.merge");
var defaults = require("./defaults.js");
var config = require("./" + (process.env.NODE_ENV || "development") + ".js");
module.exports = merge({}, defaults, config);
