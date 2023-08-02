'use strict'

var fs = require('fs');

function reqStart(response) {

    fs.readFile('./html/studentDetails.html', 'utf8', (err, data) => {

        if (err) {

            response.writeHead(404, {'Content-Type' : 'text/plain'});
            response.write('Error reading file "studentDetails.html"');
            response.end();

        } else {

            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.write(data);
            response.end();

        };
    });
};
exports.reqStart = reqStart;