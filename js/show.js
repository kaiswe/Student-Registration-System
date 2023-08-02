'use strict'

var fs = require('fs')
var url = require('url');

function reqShow(response, request) {

    var studentPhoto = url.parse(request.url).query;
    var readStream = fs.createReadStream(studentPhoto, 'base64');

    readStream.on('open', function () {

        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
        readStream.pipe(response);

    });

    readStream.on('error', function () {

        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write("File not found\n");
        response.end();

    });
};

exports.reqShow = reqShow;