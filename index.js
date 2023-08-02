'use strict'

var server = require("./js/server.js");
var router = require("./js/router.js");

var handle = {};

handle["/"] = require("./js/start.js").reqStart;
handle["/search"] = require("./js/search.js").reqSearch;
handle["/readData"] = require("./js/readCsvData.js").readCsvData;
handle["/studentsCsv"] = require("./js/studentsCsvFile.js").studentsCsvFile;
handle["/table"] = require("./js/tableHandler.js").generateStudentTable;
handle["/csv"] = require("./js/openCsv.js").reqCsvUpdate;
handle["/writeToCsv"] = require("./js/writeCsvData.js").writeCsvData;
handle["/css"] = require('./js/css.js').reqCSS;
handle["/show"] = require("./js/show.js").reqShow;
handle["/openPhoto"] = require("./js/openPhoto.js").openPhoto;

server.startServer(router.route, handle);